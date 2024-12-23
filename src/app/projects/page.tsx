import Projects from '../../components/projects'
import { getProjects } from '@/lib/projects'
import Link from 'next/link'
import { CaretLeftIcon } from '@radix-ui/react-icons'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
      
        <Link
          href='/'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <CaretLeftIcon className='h-5 w-5' />
          <span>Back to Home</span>
        </Link>

        <h1 className='title mb-12'>Projects</h1>

        <Projects projects={projects} />
      </div>
    </section>
  )
}