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
      coverImageUrl
    }
  }`)

  const blog: Blog = data?.blog || {}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 mx-auto w-96">
      <div className='pb-12'>
        <h1 className='text-2xl mb-12'>{blog.title}</h1>
        <Image src={blog.coverImageUrl} height={300} width={400} alt={'Image'} />
        <h4 className='text-sm mt-10'>{blog.summary}</h4>
      </div>
    </main>
  )
}

export default BlogPage
