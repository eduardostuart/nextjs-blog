import matter from 'gray-matter'
import Layout from '../../../components/Layout'
import ReactMarkdown from 'react-markdown'
import fs from 'fs'
import path from 'path'
import { config } from '../../../utils'

type PostMeta = {
  slug: string;
  url: string
  [key: string]: any;
}

type BlogProps = {
  meta: PostMeta;
  content: string
}

type BlogStaticProps = {
  params: {
    slug: string
  }
}

export default function BlogPost({ meta, content }: BlogProps) {
  return (
    <Layout title={`${meta.title} - Blog`}>
      <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl py-6">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const postsPath = config('postsPath', 'posts')

  const files = fs.readdirSync(postsPath)

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }: BlogStaticProps): Promise<{ props: BlogProps }> {
  const postsPath = config('postsPath', 'posts')

  const { data: meta, content } = matter(fs.readFileSync(path.join(postsPath, slug + '.md'), 'utf-8'))

  return {
    props: {
      meta: {
        title: meta.title,
        url: `/blog/posts/${slug}`,
        slug
      },
      content,
    },
  }
}
