// Builds the sidebar from the .md files in src/docs/. Add a file and it
// shows up; Vite re-runs this glob when files are added or removed.
//
//   src/docs/<section>/<slug>.md  →  id "<section>/<slug>"
//
// Optional frontmatter at the top of a file:
//   ---
//   title: Variables        (default: first "# Heading", then the file name)
//   category: Fundamentals  (default: General)
//   order: 1                (default: after numbered files, A–Z)
//   ---
const files = import.meta.glob('../docs/**/*.md', { query: '?raw', import: 'default', eager: true })

// Sections always shown in the sidebar toggle, in this order, even before
// they have notes. Any other folder in src/docs/ is added after them.
const sectionLabels = { js: 'JavaScript', react: 'React' }

const titleCase = (text) => text.replace(/[-_]+/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())

// Reads simple `key: value` lines between the opening and closing ---
const parseFrontmatter = (raw) => {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}
  return Object.fromEntries(
    match[1]
      .split(/\r?\n/)
      .map((line) => line.match(/^(\w+)\s*:\s*(.*)$/))
      .filter(Boolean)
      .map(([, key, value]) => [key, value.trim().replace(/^['"]|['"]$/g, '')]),
  )
}

const toDoc = ([path, raw]) => {
  const [section, ...rest] = path.replace('../docs/', '').replace(/\.md$/, '').split('/')
  const slug = rest.join('/')
  const meta = parseFrontmatter(raw)
  const heading = raw.match(/^#\s+(.+)$/m)?.[1].trim()

  return {
    id: `${section}/${slug}`,
    section,
    name: meta.title ?? heading ?? titleCase(rest.at(-1)),
    category: meta.category ?? 'General',
    order: Number(meta.order ?? Infinity),
    raw,
  }
}

const byOrder = (a, b) => a.order - b.order || a.name.localeCompare(b.name)

const groupByCategory = (docs) => {
  const groups = new Map()
  for (const doc of [...docs].sort(byOrder)) {
    if (!groups.has(doc.category)) groups.set(doc.category, [])
    groups.get(doc.category).push(doc)
  }
  return [...groups].map(([name, items]) => ({ name, items }))
}

const docs = Object.entries(files).map(toDoc)

const sectionIds = new Set([...Object.keys(sectionLabels), ...docs.map((doc) => doc.section)])

export const sections = [...sectionIds].map((id) => ({
  id,
  label: sectionLabels[id] ?? titleCase(id),
  categories: groupByCategory(docs.filter((doc) => doc.section === id)),
}))

export const getDoc = (id) => docs.find((doc) => doc.id === id)
