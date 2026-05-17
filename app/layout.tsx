import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-glow min-h-screen">
        <header className="sticky top-0 z-30 backdrop-blur border-b border-white/10 bg-black/40">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-wide">ToonForge AI</Link>
            <div className="flex gap-4 text-sm text-white/80">
              <Link href="/studio">Upload Studio</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/history">History</Link>
              <Link href="/admin">Admin</Link>
              <Link href="/auth">Login</Link>
            </div>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
