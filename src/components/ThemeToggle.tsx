import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors duration-150",
        isDark
          ? "border-slate-700 bg-slate-800 text-slate-200 hover:border-brand-400 hover:text-brand-200"
          : "border-slate-200 bg-white text-slate-700 hover:border-brand-300 hover:text-brand-600",
      )}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={14} /> : <Moon size={14} />}
      <span className="text-xs">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
