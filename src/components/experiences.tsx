import Link from 'next/link'
import { ExpMetadata } from '@/lib/experiences'


function calculateDateDifference(startDate: string, endDate: string) {
  const start = new Date(startDate)
  const end = new Date(endDate)

  let years = end.getFullYear() - start.getFullYear()
  let months = end.getMonth() - start.getMonth()

  if (months < 0) {
    years += 1
    months += 12
  }

  if (years<0) 
  {
    return `${months} months`
  }
  else 
  {
    return `${years} years ${months} months`
  }
}
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
              <span>{calculateDateDifference(experience.startDate, experience.endDate)}</span>
            </div>

            {/* Description */}
            <div className='line-clamp-1 text-sm text-muted-foreground'>
  
            <p>Skills: {experience.skills}</p>
            </div>
          </div>

        </li>
      ))}
    </ul>
    )
}