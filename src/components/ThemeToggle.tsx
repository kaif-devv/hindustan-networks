import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all duration-200',
        isDark
          ? 'border-gray-700 bg-gray-800 text-gray-200 hover:border-amber-500/50 hover:text-amber-400'
          : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-amber-400 hover:text-amber-600'
      )}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={14} /> : <Moon size={14} />}
      <span className="text-xs">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}
