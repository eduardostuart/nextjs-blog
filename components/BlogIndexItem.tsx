import Link from "next/link"

type Props = {
  href: string;
  title: string;
}

export default function BlogIndexItem({ href, title }: Props): JSX.Element {
  return (
    <Link href={href}>
      <a className="flex flex-col sm:flex-row mb-6 no-underline hover:bg-gray-200 focus:bg-gray-200 rounded-md p-2 transition-all ease-in-out duration-200">
        <div className="w-full text-center sm:text-left">
          <h3>{title}</h3>
        </div>
      </a>
    </Link>
  )
}
