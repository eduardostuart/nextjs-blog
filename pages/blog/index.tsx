import path from 'path'
import fs from 'fs'
import Layout from '../../components/Layout'
import matter from 'gray-matter'
import { config } from '../../utils'
import BlogIndexItem from '../../components/BlogIndexItem'

type Post = {
  slug: string;
  title: string;
}

type BlogProps = {
  posts: Post[]
}

export default function Blog({ posts }: BlogProps) {
  const postList = () => posts.map(post => BlogIndexItem({
    title: post.title,
    href: `/blog/posts/${post.slug}`
  }))

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
      slug
    }
  })

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return {
    props: {
      posts
    },
  }
}
