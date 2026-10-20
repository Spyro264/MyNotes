import { useState } from 'react'
import { ChevronIcon } from '../ui/icons'

const SidebarGroup = ({ category, activeItem, onSelect }) => {
  const containsActive = category.items.some((item) => item.id === activeItem)
  const [open, setOpen] = useState(containsActive)
  const expanded = open || containsActive

  return (
    <div className="flex flex-col">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setOpen(!expanded)}
        className="flex min-h-11 w-full cursor-pointer items-center gap-2 rounded-lg px-2 text-left text-sm font-bold text-fg hover:bg-raised"
      >
        <ChevronIcon
          size={16}
          className={`transition-transform ${expanded ? 'rotate-90 text-accent-text' : 'text-fg3'}`}
        />
        <span className="flex-1">{category?.name}</span>
        <span className="font-mono text-xs font-medium text-fg3">{category.items.length}</span>
      </button>

      {expanded && (
        <ul className="mt-0.5 mb-2.5 ml-3.75 flex flex-col gap-px border-l border-line pl-2.5">
          {category.items.map((item) => {
            const active = item.id === activeItem
            return (
              <li key={item.id}>
                <a
                  href={`/${item.id}`}
                  aria-current={active ? 'page' : undefined}
                  onClick={(event) => {
                    event.preventDefault()
                    onSelect(item.id)
                  }}
                  className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors ${
                    active
                      ? 'bg-accent-soft font-bold text-accent-text'
                      : 'text-fg2 hover:bg-raised hover:text-fg'
                  }`}
                >
                  <span
                    className={`size-2 flex-none rounded-full ${
                      active ? 'bg-accent' : 'border-[1.5px] border-line2'
                    }`}
                  />
                  <span>{item.name}</span>
                </a>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default SidebarGroup
