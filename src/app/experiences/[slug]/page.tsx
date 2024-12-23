import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getExperiences, getExperienceBySlug } from '@/lib/experiences'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const exps = await getExperiences()
  const slugs = exps.map(e => ({ slug: e.slug }))

  return slugs
}


export default async function Experience({
    params
}:{
    params:{slug: string}
}){
    const {slug} = params
    const experience = await getExperienceBySlug(slug)

    if(!experience) {
        notFound()
    }

    const {metadata, content} = experience  
    const {company, summary, logo, role, startDate, endDate } = metadata

    return(
        <section className='pb-24 pt-32'>
            <div className= 'container max-w-3xl'>
            <h1 className='title'>{company}</h1>
            <p className='mt-3 text-xs text-muted-foreground'>{startDate} - {endDate}</p>
            <h3 className='prose mt-16 dark:prose-invert'>{role}</h3>
            <main className='prose mt-16 dark:prose-invert'>
                <MDXContent source={content} />
            </main>
                
            </div>
        </section>
    )
}