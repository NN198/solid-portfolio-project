import Link from 'next/link'
import { ExpMetadata } from '@/lib/experiences'

export default function Experiences({
    experiences
}:
{
    experiences: ExpMetadata[]
})
{
    return(
        <ul className='space-y-6'>
      {experiences.map(experience => (
        <li
          key={experience.slug}
          className='group relative p-5 rounded-lg border border-muted bg-background hover:shadow-md transition-shadow'
        >
          <div className='space-y-2'>
            {/* Job Title */}
            <h3 className='title text-xl font-semibold text-foreground'>
              {experience.company}
            </h3>

            {/* Company and Date Range */}
            <div className='flex justify-between text-md text-muted-foreground'>
              <span>{experience.role}</span>
              <span>{experience.startDate} - {experience.endDate}</span>
            </div>

            {/* Description */}
            <p className='line-clamp-1 text-sm text-muted-foreground'>{experience.summary}</p>
          </div>

          {/* Read More Link */}
          <div className='mt-3'>
            <Link
              href={`/experiences`}
              className='inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-dark'
            >
              <span>Read More</span>
            </Link>
          </div>
        </li>
      ))}
    </ul>
    )
}