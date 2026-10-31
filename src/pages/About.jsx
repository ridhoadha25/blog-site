import { ArrowUpRight, Code2, Palette, BookOpen } from 'lucide-react'

const interests = [
    {
        icon: Code2,
        title: 'Web Development',
        description:
            'Mempelajari JavaScript, React.js, dan teknologi untuk membangun website.',
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description:
            'Mengeksplorasi desain antarmuka yang modern, sederhana, dan mudah digunakan.',
    },
    {
        icon: BookOpen,
        title: 'Learning Journey',
        description:
            'Mendokumentasikan proses belajar, pengalaman, dan pengetahuan baru.',
    },
]

export default function About() {
    return (
        <section className="mx-auto min-h-[70vh] max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
            <div className="max-w-3xl">
                <p className="text-sm font-medium text-emerald-400">
                    A Little Introduction
                </p>

                <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
                    Halo, saya Ridho.
                    <span className="mt-2 block text-zinc-500">
                        Senang belajar hal baru.
                    </span>
                </h1>

                <p className="mt-7 text-base leading-8 text-zinc-400 sm:text-lg">
                    Saya adalah mahasiswa Sistem Informasi yang tertarik pada
                    pengembangan web dan desain antarmuka. Saat ini, saya terus
                    mempelajari teknologi web, membangun proyek, dan mengembangkan
                    kemampuan melalui praktik.
                </p>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                    RidhoVerse saya buat sebagai ruang untuk mencatat proses belajar,
                    berbagi pengetahuan, dan menuangkan ide. Bagi saya, setiap proyek
                    adalah kesempatan untuk memahami sesuatu yang baru.
                </p>

                <a
                    href="https://github.com/ridhoadha25"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/5"
                >
                    Kunjungi GitHub
                    <ArrowUpRight size={17} />
                </a>
            </div>

            <div className="mt-16 border-t border-white/10 pt-10">
                <h2 className="font-display text-2xl font-bold text-white">
                    Hal yang Saya Sukai
                </h2>

                <div className="mt-7 grid gap-5 md:grid-cols-3">
                    {interests.map((item) => {
                        const Icon = item.icon

                        return (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-white/10 bg-[#0d1210] p-6"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300">
                                    <Icon size={22} />
                                </div>

                                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-zinc-400">
                                    {item.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}