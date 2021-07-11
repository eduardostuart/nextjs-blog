import Link from "next/link";
import Logo from "./Logo";
import Nav from "./Nav";

type PageHeaderProps = {
  className?: string
}

export default function PageHeader({ className }: PageHeaderProps) : JSX.Element {
  return (
    <header className={['flex items-center py-6 border-b', className || ''].join(' ')}>
      <Link href="/">
        <a><Logo /></a>
      </Link>
      <Nav className="ml-auto" />
    </header>
  )
}
