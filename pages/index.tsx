import Link from 'next/link'

export default function Home() {
    return (
        <>
            <div>
                <h1>Site do Fernando</h1>
                <Link href="/blog">Blog</Link>
            </div>
        </>
    )
}
