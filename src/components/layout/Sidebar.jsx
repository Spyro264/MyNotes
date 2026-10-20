import { useEffect } from 'react'
import IconButton from '../ui/IconButton'
import { CloseIcon } from '../ui/icons'
import Logo from '../ui/Logo'
import SidebarGroup from './SidebarGroup'

// Desktop (lg+): sticky column next to the content.
// Mobile: slide-in drawer opened from the navbar menu button.
const Sidebar = ({ sections, activeSection, onSectionChange, activeItem, onSelect, open, onClose }) => {
  const section = sections.find((s) => s.id === activeSection)

  useEffect(() => {
    if (!open) return
    const onKey = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-backdrop transition-opacity lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        aria-label="Docs"
        className={`fixed inset-y-0 left-0 z-50 flex w-75 max-w-[85vw] flex-col gap-5 overflow-y-auto border-r border-line bg-bg px-4 pt-4 pb-12 transition-[translate,visibility] lg:sticky lg:top-navbar lg:bottom-auto lg:z-0 lg:h-[calc(100dvh-var(--spacing-navbar))] lg:w-72 lg:max-w-none lg:visible lg:translate-x-0 lg:pt-6 ${
          open ? 'translate-x-0' : 'invisible -translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between lg:hidden">
          <Logo />
          <IconButton label="Close menu" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

        {sections.length > 1 && (
          <div
            role="group"
            aria-label="Section"
            className="grid gap-1 rounded-xl border border-line bg-panel p-1"
            style={{ gridTemplateColumns: `repeat(${sections.length}, minmax(0, 1fr))` }}
          >
            {sections.map((s) => {
              const active = s.id === activeSection
              return (
                <button
                  key={s.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onSectionChange(s.id)}
                  className={`min-h-10 cursor-pointer rounded-[9px] px-3 text-sm font-semibold transition-colors ${
                    active ? 'bg-accent text-on-accent' : 'text-fg2 hover:text-fg'
                  }`}
                >
                  {s.label}
                </button>
              )
            })}
          </div>
        )}

        {section && (
          <nav aria-label={`${section.label} topics`} className="flex flex-col gap-0.5">
            {section.categories.map((category) => (
              <SidebarGroup
                key={`${section.id}-${category.name}`}
                category={category}
                activeItem={activeItem}
                onSelect={onSelect}
              />
            ))}
            {section.categories.length === 0 && (
              <p className="px-2 text-sm text-fg3">
                No {section.label} notes yet. Add a .md file to src/docs/{section.id}/
              </p>
            )}
          </nav>
        )}
      </aside>
    </>
  )
}

export default Sidebar
