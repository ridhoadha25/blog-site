import { ArrowUpRight, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BlogCard({ article }) {
    const formattedDate = new Date(
        `${article.date}T12:00:00`
    ).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })

    return (
        <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0d1210] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
            <Link
                to={`/articles/${article.slug}`}
                className="block overflow-hidden"
                aria-label={`Baca artikel ${article.title}`}
            >
                <img
                    src={article.cover}
                    alt={article.title}
                    loading="lazy"
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </Link>

            <div className="p-5 sm:p-6">
                <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    {article.category}
                </span>

                <Link to={`/articles/${article.slug}`}>
                    <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-white transition group-hover:text-emerald-300">
                        {article.title}
                    </h3>
                </Link>

                <p className="mt-3 line-clamp-3 text-sm leading-7 text-zinc-400">
                    {article.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                    <div className="text-xs text-zinc-500">
                        {formattedDate}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                        <Clock3 size={14} />
                        {article.readTime}
                    </div>
                </div>

                <Link
                    to={`/articles/${article.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                >
                    Baca selengkapnya
                    <ArrowUpRight size={16} />
                </Link>
            </div>
        </article>
    )
}