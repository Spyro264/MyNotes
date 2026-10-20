import useTheme from '../../hooks/useTheme'
import IconButton from './IconButton'
import { MoonIcon, SunIcon } from './icons'

const ThemeToggle = () => {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <IconButton label={isDark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={toggle}>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  )
}

export default ThemeToggle
