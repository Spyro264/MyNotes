import IconButton from '../ui/IconButton'
import { MenuIcon } from '../ui/icons'
import Logo from '../ui/Logo'
import ThemeToggle from '../ui/ThemeToggle'

const Navbar = ({onMenuClick }) => (
  <header className="sticky top-0 z-30 border-b border-line bg-bg">
    <div className="mx-auto flex h-navbar max-w-360 items-center gap-3 px-4 sm:gap-7 sm:px-6">
      <IconButton label="Open menu" onClick={onMenuClick} className="lg:hidden">
        <MenuIcon />
      </IconButton>
      <Logo />
      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
      </div>
    </div>
  </header>
)

export default Navbar
