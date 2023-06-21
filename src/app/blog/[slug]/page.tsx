import { Blog } from '@interfaces/blog';
import { fetchContent } from '@api/cms.api';
import Image from 'next/image';

async function BlogPage({ params }: { params: { slug: string } }) {
  const data = await fetchContent(`{
    blog(id:"${params.slug}") {
      id
      title
      summary
      isPublished
    }
  }`)

  const blog: Blog = data?.blog || {}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 mx-auto w-96">
      <div className='pb-12'>
        <h1 className='text-2xl'>{blog.title}</h1>
        <Image src={blog.coverImageUrl} width={100} height={300} alt={'Image'} />
        <span className='text-sm'>{blog.summary}</span>
      </div>
    </main>
  )
}

export default BlogPage
