import Link from "next/link";
import Logo from "./Logo";
import Nav from "./Nav";

type PageHeaderProps = {
  className?: string
}

export default function PageHeader({ className }: PageHeaderProps) : JSX.Element {
  return (
    <header className={['text-center pt-8', className || ''].join(' ')}>
      <Link href="/">
        <a><Logo /></a>
      </Link>
      <Nav className="justify-center py-8" />
    </header>
  )
}
