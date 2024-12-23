import { getExperiences } from "@/lib/experiences"
import Link from "next/link"
import { CaretLeftIcon } from "@radix-ui/react-icons"
import Experiences from "../../components/experiences"

export default async function ExperiencesPage(){
    const exp = await getExperiences()

    return (
        <section  className='pb-24 pt-40'>
            <div className='container max-w-3xl'>
                <Link
                 href='/'
                 className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'>
                    <CaretLeftIcon className="h-5 w-5"/>
                    <span>Back to Home</span>
                </Link>
                <h1 className="title mb-12">Experiences</h1>
                <Experiences experiences = {exp}/>
            </div>
        </section>
    )
}