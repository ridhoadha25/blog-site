import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
            <p className="font-display text-7xl font-bold text-emerald-400">
                404
            </p>

            <h1 className="mt-5 text-2xl font-bold text-white">
                Halaman tidak ditemukan
            </h1>

            <p className="mt-3 max-w-md leading-7 text-zinc-400">
                Sepertinya halaman yang kamu cari tidak tersedia atau alamatnya
                sudah berubah.
            </p>

            <Link
                to="/"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
            >
                <ArrowLeft size={16} />
                Kembali ke Home
            </Link>
        </section>
    )
}