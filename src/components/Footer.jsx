import { GitBranch, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#0b0f0d]">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
                <div>
                    <Link to="/" className="font-display text-lg font-bold text-white">
                        Ridho<span className="text-emerald-400">Verse</span>
                    </Link>

                    <p className="mt-2 text-sm text-zinc-500">
                        A personal space for ideas, code, and stories.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-400">
                    <Link to="/" className="transition hover:text-white">
                        Home
                    </Link>

                    <Link to="/articles" className="transition hover:text-white">
                        Artikel
                    </Link>

                    <Link to="/about" className="transition hover:text-white">
                        Tentang
                    </Link>

                    <a
                        href="https://github.com/ridhoadha25"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="transition hover:text-emerald-300"
                    >
                        <GitBranch size={19} />
                    </a>

                    <button
                        type="button"
                        aria-label="Kembali ke atas"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                        className="rounded-lg border border-white/10 p-2 transition hover:bg-white/5 hover:text-white"
                    >
                        <ArrowUp size={17} />
                    </button>
                </div>
            </div>

            <div className="border-t border-white/5 px-5 py-4 text-center text-xs text-zinc-600">
                © {new Date().getFullYear()} RidhoVerse. Made with curiosity.
            </div>
        </footer>
    )
}