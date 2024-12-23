import Link from 'next/link'
import { ThemeToggle } from '../../../components/theme-toggle'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-25 bg-background/75 py-5 backdrop-blur-sm '>
      <nav className='container flex max-w-15xl items-center justify-center gap-10'>
            <Link href='/' className='flex font-serif text-2xl font-bold'>
                    NN.
                </Link>
        <ul className='flex items-center gap-6 max-w-5xl text-lg font-light text-muted-foreground sm:gap-10'>
            <div>
            <li className='transition-colors hover:text-foreground'>
          
            </li>
            </div>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/experiences'>About Me</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
    
  )
}