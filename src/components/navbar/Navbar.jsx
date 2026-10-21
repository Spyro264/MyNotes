import { Link, NavLink } from 'react-router'

const navItems = [
  { name: 'JavaScript', to: '/docs/js' },
  { name: 'React', to: '/docs/react' },
]

const Navbar = () => {
  return (
    <header className='flex items-center justify-between gap-4 min-h-16 border-b border-b-line2'>
      {/* {logo} */}
      <Link to='/' className='flex items-center gap-2.5'>
        <span className='grid place-items-center size-9 rounded-lg bg-primary font-code text-sm font-bold text-on-accent'>
          {'{}'}
        </span>
        <span className='text-xl font-black tracking-tight text-fg'>MyNotes</span>
      </Link>

      {/* {nav items} */}
      <nav>
        <ul className='flex items-center gap-1 sm:gap-2'>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg font-semibold ${isActive ? 'text-accent' : 'text-fg2 hover:text-fg'}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
