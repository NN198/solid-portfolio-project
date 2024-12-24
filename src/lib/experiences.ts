import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const __dirname = path.join(process.cwd(), '/src/app/content', 'experiences')


export type ExperienceType = {
  metadata: ExpMetadata
  content: string
}


export type ExpMetadata = {
    company?: string
    summary?: string
    logo?: string
    role?: string
    startDate?: string
    endDate?: string
    skills?: string
    slug: string
}

export async function getExperienceBySlug(slug: string): Promise<ExperienceType | null> {
    try{
        const filePath = path.join(__dirname, `${slug}.mdx`)
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf8'})
        const {data, content} = matter(fileContent)
        return {metadata: {...data, slug}, content}
    }
    catch(err) {
        console.log(err)
        return null
    }
}



export async function getExperiences(limit?: number): Promise<ExpMetadata[]> {
  const files = fs.readdirSync(__dirname)

  const exps = files
    .map(file => getExperienceMetadata(file))
    .sort((a, b) => {
      if (new Date(a.startDate ?? '') < new Date(b.startDate ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  if (limit) {
    return exps.slice(0, limit)
  }

  return exps
}



export function getExperienceMetadata(filepath: string): ExpMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(__dirname, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  return { ...data, slug }
}
