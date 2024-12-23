import Main   from "./components/Main/page";
import Projects from './components/Projects/projectsHub'
import Experience from './components/Experience/expPage'
export default function Home() {
  return (
    
    <section  className='py-24'>
      <div className='container max-w-3xl'>
        <Main/>
        {/* <About/> */}
        <Experience />
        <Projects/>

        
      </div>
    </section>
    
    
  );
}
