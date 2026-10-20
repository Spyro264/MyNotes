import { useCallback, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import { getDoc, sections } from './lib/docs'

const firstItem = (sectionId) =>
  sections.find((section) => section.id === sectionId)?.categories[0]?.items[0].id

const App = () => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id)
  const [activeItem, setActiveItem] = useState(firstItem(sections[0]?.id))
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const changeSection = (id) => {
    setActiveSection(id)
    setActiveItem(firstItem(id))
  }

  const selectItem = (id) => {
    setActiveItem(id)
    setMenuOpen(false)
  }

  const activeName = getDoc(activeItem)?.name ?? 'No notes here yet'

  return (
    <div className="min-h-dvh">
      <Navbar onMenuClick={() => setMenuOpen(true)} />

      <div className="flex items-start">
        <Sidebar
          sections={sections}
          activeSection={activeSection}
          onSectionChange={changeSection}
          activeItem={activeItem}
          onSelect={selectItem}
          open={menuOpen}
          onClose={closeMenu}
        />

        {/* Placeholder until the doc page is built */}
        <main className="min-w-0 flex-1 px-5 py-10 sm:px-10 lg:px-16">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{activeName}</h1>
          <p className="mt-4 text-fg2">Page content will render here.</p>
        </main>
      </div>
    </div>
  )
}

export default App
