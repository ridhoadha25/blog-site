import { Link, NavLink } from 'react-router-dom'
import { BookOpen, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Artikel', path: '/articles' },
        { name: 'Tentang', path: '/about' },
    ]

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080c0a]/90 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
                <Link
                    to="/"
                    className="flex items-center gap-3"
                    onClick={() => setMenuOpen(false)}
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white">
                        <BookOpen size={21} />
                    </div>

                    <div>
                        <h1 className="font-display text-lg font-bold tracking-tight text-white">
                            Ridho<span className="text-emerald-400">Verse</span>
                        </h1>
                        <p className="text-xs text-zinc-500">Ideas beyond boundaries.</p>
                    </div>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path === '/'}
                            className={({ isActive }) =>
                                `text-sm transition ${isActive
                                    ? 'font-semibold text-white'
                                    : 'text-zinc-400 hover:text-white'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <Link
                    to="/articles"
                    className="hidden rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400 md:inline-flex"
                >
                    Baca Artikel
                </Link>

                <button
                    type="button"
                    aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded-lg border border-white/10 p-2 text-white md:hidden"
                >
                    {menuOpen ? <X size={21} /> : <Menu size={21} />}
                </button>
            </nav>

            {menuOpen && (
                <div className="border-t border-white/10 px-5 py-4 md:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col gap-1">
                        {links.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.path === '/'}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `rounded-lg px-4 py-3 text-sm ${isActive
                                        ? 'bg-emerald-500/10 text-emerald-300'
                                        : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}