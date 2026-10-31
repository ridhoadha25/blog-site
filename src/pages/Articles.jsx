import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import BlogCard from '../components/BlogCard'
import { articles, categories } from '../data/articles'

export default function Articles() {
    const [search, setSearch] = useState('')
    const [activeCategory, setActiveCategory] = useState('Semua')

    const filteredArticles = useMemo(() => {
        const query = search.trim().toLowerCase()

        return articles.filter((article) => {
            const matchesSearch =
                article.title.toLowerCase().includes(query) ||
                article.excerpt.toLowerCase().includes(query)

            const matchesCategory =
                activeCategory === 'Semua' ||
                article.category === activeCategory ||
                (activeCategory === 'Web Development' &&
                    ['React.js', 'JavaScript'].includes(article.category))

            return matchesSearch && matchesCategory
        })
    }, [search, activeCategory])

    return (
        <section className="mx-auto min-h-[70vh] max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-medium text-emerald-400">
                    The Writing Room
                </p>

                <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
                    Semua Artikel
                </h1>

                <p className="mt-5 leading-7 text-zinc-400">
                    Temukan tulisan tentang teknologi, pengembangan web, desain,
                    dan perjalanan belajar.
                </p>
            </div>

            <div className="mx-auto mt-10 max-w-2xl">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0d1210] px-4 py-3 focus-within:border-emerald-400/50">
                    <Search size={19} className="shrink-0 text-zinc-500" />

                    <input
                        type="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Cari artikel..."
                        aria-label="Cari artikel"
                        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
                    />

                    {search && (
                        <button
                            type="button"
                            aria-label="Hapus pencarian"
                            onClick={() => setSearch('')}
                            className="text-zinc-500 hover:text-white"
                        >
                            <X size={17} />
                        </button>
                    )}
                </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        onClick={() => setActiveCategory(category)}
                        className={`rounded-full border px-4 py-2 text-sm transition ${activeCategory === category
                                ? 'border-emerald-400 bg-emerald-500 text-white'
                                : 'border-white/10 bg-[#0d1210] text-zinc-400 hover:border-white/20 hover:text-white'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="mt-12 flex items-center justify-between border-b border-white/10 pb-4">
                <p className="text-sm text-zinc-400">
                    Menampilkan{' '}
                    <span className="font-semibold text-white">
                        {filteredArticles.length}
                    </span>{' '}
                    artikel
                </p>
            </div>

            {filteredArticles.length > 0 ? (
                <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredArticles.map((article) => (
                        <BlogCard key={article.id} article={article} />
                    ))}
                </div>
            ) : (
                <div className="py-20 text-center">
                    <Search size={32} className="mx-auto text-zinc-600" />

                    <h2 className="mt-4 text-lg font-semibold text-white">
                        Artikel tidak ditemukan
                    </h2>

                    <p className="mt-2 text-sm text-zinc-500">
                        Coba kata kunci atau kategori yang berbeda.
                    </p>

                    <button
                        type="button"
                        onClick={() => {
                            setSearch('')
                            setActiveCategory('Semua')
                        }}
                        className="mt-5 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
                    >
                        Reset pencarian
                    </button>
                </div>
            )}
        </section>
    )
}