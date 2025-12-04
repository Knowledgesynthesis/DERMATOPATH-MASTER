import { Outlet, Link, useLocation } from 'react-router-dom'
import { Home, BookOpen, Settings as SettingsIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const Layout = () => {
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-xl font-bold">D</span>
            </div>
            <span className="hidden font-bold sm:inline-block">
              Dermatopath Master
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container py-6 px-4">
          <Outlet />
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="sticky bottom-0 z-50 w-full border-t border-border bg-background">
        <div className="container flex h-16 items-center justify-around px-4">
          <Link
            to="/"
            className={cn(
              'flex flex-col items-center justify-center space-y-1 rounded-lg px-4 py-2 transition-colors',
              isActive('/')
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs font-medium">Home</span>
          </Link>

          <Link
            to="/assessment"
            className={cn(
              'flex flex-col items-center justify-center space-y-1 rounded-lg px-4 py-2 transition-colors',
              isActive('/assessment')
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <BookOpen className="h-5 w-5" />
            <span className="text-xs font-medium">Assessment</span>
          </Link>

          <Link
            to="/settings"
            className={cn(
              'flex flex-col items-center justify-center space-y-1 rounded-lg px-4 py-2 transition-colors',
              isActive('/settings')
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <SettingsIcon className="h-5 w-5" />
            <span className="text-xs font-medium">Settings</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Layout
