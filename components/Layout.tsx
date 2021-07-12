import Head from 'next/head'
import { config } from '../utils'
import PageHeader from './PageHeader'

type LayoutProps = {
  title?: string;
  children: JSX.Element | JSX.Element[] | string;
}

export default function Layout({ children, title }: LayoutProps) : JSX.Element {
    return (
      <>
        <Head>
          <title>{[title, config('pageTitle')].filter(Boolean).join(' - ')}</title>
        </Head>

        <div className="mx-auto max-w-4xl">
          <PageHeader className="mb-4" />
          {children}
        </div>

      </>
    )
}
