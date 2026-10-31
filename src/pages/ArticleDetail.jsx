import { ArrowLeft, Clock3, CalendarDays } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { articles } from '../data/articles'
import BlogCard from '../components/BlogCard'

export default function ArticleDetail() {
    const { slug } = useParams()

    const article = articles.find((item) => item.slug === slug)

    if (!article) {
        return (
            <section className="mx-auto max-w-3xl px-5 py-24 text-center">
                <h1 className="font-display text-3xl font-bold text-white">
                    Artikel tidak ditemukan
                </h1>

                <p className="mt-4 text-zinc-400">
                    Artikel yang kamu cari mungkin tidak tersedia.
                </p>

                <Link
                    to="/articles"
                    className="mt-7 inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200"
                >
                    <ArrowLeft size={17} />
                    Kembali ke artikel
                </Link>
            </section>
        )
    }

    const relatedArticles = articles
        .filter(
            (item) =>
                item.id !== article.id &&
                item.category === article.category
        )
        .slice(0, 2)

    const formattedDate = new Date(
        `${article.date}T12:00:00`
    ).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    return (
        <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
            <Link
                to="/articles"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
            >
                <ArrowLeft size={16} />
                Semua artikel
            </Link>

            <header className="mt-10">
                <span className="inline-flex rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                    {article.category}
                </span>

                <h1 className="mt-6 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
                    {article.title}
                </h1>

                <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
                    {article.excerpt}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-white/10 py-5 text-sm text-zinc-500">
                    <span className="font-medium text-zinc-300">
                        {article.author}
                    </span>

                    <span className="inline-flex items-center gap-2">
                        <CalendarDays size={15} />
                        {formattedDate}
                    </span>

                    <span className="inline-flex items-center gap-2">
                        <Clock3 size={15} />
                        {article.readTime}
                    </span>
                </div>
            </header>

            <img
                src={article.cover}
                alt={article.title}
                className="mt-9 max-h-[480px] w-full rounded-2xl border border-white/10 object-cover"
            />

            <div className="mx-auto mt-10 max-w-3xl">
                <div className="space-y-6 text-base leading-8 text-zinc-300">
                    {article.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                <div className="mt-12 border-t border-white/10 pt-6">
                    <p className="text-sm text-zinc-500">
                        Ditulis oleh{' '}
                        <span className="font-medium text-zinc-300">
                            {article.author}
                        </span>{' '}
                        untuk RidhoVerse.
                    </p>
                </div>
            </div>

            {relatedArticles.length > 0 && (
                <section className="mt-16 border-t border-white/10 pt-10">
                    <h2 className="font-display text-2xl font-bold text-white">
                        Artikel Terkait
                    </h2>

                    <div className="mt-7 grid gap-6 sm:grid-cols-2">
                        {relatedArticles.map((item) => (
                            <BlogCard key={item.id} article={item} />
                        ))}
                    </div>
                </section>
            )}
        </article>
    )
}