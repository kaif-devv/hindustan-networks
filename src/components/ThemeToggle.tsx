import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/20 bg-white/5 p-1">
      {(['light', 'system', 'dark'] as const).map((t) => {
        const icons = { light: Sun, system: Monitor, dark: Moon }
        const Icon = icons[t]
        return (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={cn(
              'rounded-full p-1.5 transition-all duration-200',
              theme === t
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-white/60 hover:text-white'
            )}
            title={`${t.charAt(0).toUpperCase() + t.slice(1)} mode`}
          >
            <Icon size={14} />
          </button>
        )
      })}
    </div>
  )
}
