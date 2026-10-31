import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import { articles } from '../data/articles'
import avatarHome from '../assets/avatar home.jpg'

export default function Home() {
    const featuredArticle = articles.find((article) => article.featured)
    const latestArticles = articles.filter(
        (article) => article.id !== featuredArticle?.id
    )

    return (
        <>
            <section className="relative overflow-hidden border-b border-white/5">
                {/* Glow background */}
                <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-600/15 blur-[140px]" />
                <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[120px]" />

                <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
                    <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:justify-between">

                        {/* Left — Text */}
                        <div className="max-w-2xl flex-1">
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300 sm:text-sm">
                                <Sparkles size={15} />
                                Welcome to my personal space
                            </div>

                            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                                Ideas, code, and
                                <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                                    everything between.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
                                Selamat datang di RidhoVerse. Tempat saya berbagi perjalanan
                                belajar web development, eksplorasi teknologi, catatan
                                pemrograman, dan pemikiran sederhana tentang banyak hal.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-4">
                                <Link
                                    to="/articles"
                                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-400"
                                >
                                    Jelajahi Artikel
                                    <ArrowRight size={17} />
                                </Link>

                                <Link
                                    to="/about"
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
                                >
                                    Tentang Saya
                                </Link>
                            </div>

                            <a
                                href="#featured"
                                className="mt-14 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
                            >
                                Temukan tulisan terbaru
                                <ArrowDown size={15} />
                            </a>
                        </div>

                        {/* Right — Avatar (visible all screens) */}
                        <div className="relative flex flex-shrink-0 items-center justify-center">
                            {/* Outer glow ring */}
                            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-500/20 to-teal-400/10 blur-3xl" />

                            {/* Card container */}
                            <div className="relative overflow-hidden rounded-3xl border border-emerald-400/25 shadow-2xl shadow-emerald-900/40">
                                {/* Image — white bg illustration */}
                                <img
                                    src={avatarHome}
                                    alt="Ridho — Web Developer"
                                    className="block h-[260px] w-[220px] object-cover object-center sm:h-[320px] sm:w-[260px] lg:h-[400px] lg:w-[300px]"
                                />

                                {/* Gradient fade: image white → dark page bg */}
                                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080c0a] via-[#080c0a]/70 to-transparent lg:h-36" />

                                {/* Subtle top fade */}
                                <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#080c0a]/30 to-transparent" />

                                {/* Floating badge */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-emerald-400/30 bg-[#080c0a]/95 px-3 py-1.5 text-xs font-medium text-emerald-300 shadow-lg backdrop-blur-sm sm:bottom-5 sm:px-4 sm:py-2">
                                    <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                                    Open to collaborate
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {featuredArticle && (
                <section
                    id="featured"
                    className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8"
                >
                    <div className="mb-8 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-sm font-medium text-emerald-400">
                                Pilihan Editor
                            </p>
                            <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                                Artikel Unggulan
                            </h2>
                        </div>
                    </div>

                    <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#0d1210] md:grid-cols-2">
                        <Link
                            to={`/articles/${featuredArticle.slug}`}
                            className="group min-h-64 overflow-hidden md:min-h-[400px]"
                        >
                            <img
                                src={featuredArticle.cover}
                                alt={featuredArticle.title}
                                className="h-full min-h-64 w-full object-cover transition duration-700 group-hover:scale-105 md:min-h-[400px]"
                            />
                        </Link>

                        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
                            <span className="w-fit rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                                {featuredArticle.category}
                            </span>

                            <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                                {featuredArticle.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                                {featuredArticle.excerpt}
                            </p>

                            <Link
                                to={`/articles/${featuredArticle.slug}`}
                                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
                            >
                                Baca artikel
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            <section className="border-y border-white/5 bg-[#0b0f0d]">
                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
                    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-sm font-medium text-emerald-400">
                                Dari Catatan Saya
                            </p>
                            <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                                Artikel Terbaru
                            </h2>
                            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400">
                                Berbagai catatan tentang teknologi, coding, desain, dan
                                proses belajar yang terus berkembang.
                            </p>
                        </div>

                        <Link
                            to="/articles"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
                        >
                            Semua artikel
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {latestArticles.slice(0, 3).map((article) => (
                            <BlogCard key={article.id} article={article} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 p-8 sm:p-12">
                    <div className="pointer-events-none absolute -right-10 -top-20 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl" />

                    <div className="relative max-w-2xl">
                        <p className="text-sm font-medium text-emerald-300">
                            Keep Learning, Keep Building
                        </p>

                        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                            Setiap baris kode adalah bagian dari perjalanan.
                        </h2>

                        <p className="mt-4 leading-7 text-zinc-400">
                            RidhoVerse adalah ruang untuk mendokumentasikan proses,
                            membagikan pengetahuan, dan terus berkembang melalui hal-hal
                            yang saya pelajari.
                        </p>

                        <Link
                            to="/about"
                            className="mt-7 inline-flex items-center gap-2 font-semibold text-emerald-300 hover:text-emerald-200"
                        >
                            Kenali RidhoVerse
                            <ArrowRight size={17} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}