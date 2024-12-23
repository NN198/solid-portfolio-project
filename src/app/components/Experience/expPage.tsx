import Link from 'next/link'
import { getExperiences } from '@/lib/experiences'
import Experiences from '@/components/experiences'

export default async function ExperiencesPage(){
    const experiences = await getExperiences(2)

    return (
        <section className ="pb-24">
            <div>
                <h2 className="title mb-12">Work Experience</h2>
                <Experiences experiences={experiences} />
                <Link
                href='/experiences'
                className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
                >
          <span>Know More</span>
        </Link>
            </div>

        </section>
    )
}