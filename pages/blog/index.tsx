import path from 'path'
import fs from 'fs'
import Link from 'next/link'
import matter from 'gray-matter'
import { config } from '../../utils'
import Layout from '../../components/Layout'

type Post = {
  slug: string;
  title: string;
  date: Date;
}

type BlogProps = {
  posts: Post[]
}

export default function Blog({ posts }: BlogProps) {
  const postList = () => {
    return (
      <>
        <h2 className="text-2xl font-semibold mb-2">Posts</h2>

        {posts.map(post => {
          return (
            <article key={post.slug} className="pb-2">
              <Link href={`/blog/posts/${post.slug}`}>
                <a className="no-underline hover:underline focus:underline transition-all ease-in-out duration-200">
                  <h3>{new Date(post.date).toLocaleDateString()} - {post.title}</h3>
                </a>
              </Link>
            </article>
          )
        })}
      </>
    )
  }

  return (
    <Layout title="Blog">
      {posts.length > 0 ? postList() : `Nothing found`}
    </Layout>
  )
}

export async function getStaticProps(): Promise<{ props: BlogProps }> {
  const postsPath = config('postsPath', 'posts')

  const posts = fs.readdirSync(path.join(postsPath)).map((filename) => {
    const slug = filename.replace('.md', '')
    const { data: meta } = matter(fs.readFileSync(path.join(postsPath, filename), 'utf-8'))

    return {
      date: (meta.date ? meta.date : new Date()).toString(),
      title: meta.title,
      slug,
    }
  })

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return {
    props: {
      posts
    },
  }
}
