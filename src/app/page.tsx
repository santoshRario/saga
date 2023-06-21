import { Blog } from '@interfaces/blog';
import { fetchContent } from '@api/cms.api';
import Link from 'next/link';

async function Home() {
  const data = await fetchContent(`{
    blogCollection {
      items {
        id
        title
        summary
        isPublished
        sys {
          id
        }
      }
    }
  }`)

  const blogs = data?.blogCollection?.items?.filter((b: Blog) => b.isPublished) || []

  if(blogs.length <= 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>Something went wrong</div>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 mx-auto w-96">
      {blogs.map((b: Blog,i: number) => {
        return (
          <div className='pb-12'>
            <Link className='self-start' href={`/blog/${b.sys.id}`}>
              <h1 className='text-2xl'>{b.title}</h1>
            </Link>
            <span className='text-sm'>{b.summary}</span>
          </div>
        )
      })}
    </main>
  )
}

export default Home
