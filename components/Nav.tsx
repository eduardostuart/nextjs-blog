import Link from 'next/link'

type NavProps = {
  className?: string
}

export default function Nav({ className }: NavProps): JSX.Element {
  return (
    <nav className={['flex items-center', className || ''].join(' ')}>
      <Link href="/"><a className="mr-2 hover:underline">Home</a></Link>
      <Link href="/about"><a className="mr-2 hover:underline">About</a></Link>
      <Link href="/blog"><a className="hover:underline">Blog</a></Link>
    </nav>
  )
}
