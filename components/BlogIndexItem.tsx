import Link from "next/link"

type Props = {
  href: string;
  title: string;
}

export default function BlogIndexItem({ href, title }: Props): JSX.Element {
  return (
    <Link href={href}>
      <a className="no-underline hover:underline focus:underline transition-all ease-in-out duration-200">
        <h3 className="inline-block">{title}</h3>
      </a>
    </Link>
  )
}
