import Link from 'next/link';
import { Palette } from 'lucide-react'; // Using Palette icon for art theme

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2 group">
          <Palette className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
          <span className="font-bold text-xl tracking-tight group-hover:text-accent transition-colors">
            アートショーケース
          </span>
        </Link>
        <nav className="flex flex-1 items-center justify-end space-x-4">
          {/* Future navigation links can go here. For example:
          <Link href="/artists" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            アーティスト
          </Link>
          */}
        </nav>
      </div>
    </header>
  );
}
