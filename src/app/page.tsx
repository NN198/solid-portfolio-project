import Main   from "./components/Main/page";
import Projects from './components/Projects/projectsHub'
export default function Home() {
  return (
    
    <section  className='py-24'>
      <div className='container max-w-3xl'>
        <Main/>
        {/* <About/> */}
        <Projects/>

      </div>
    </section>
    
    
  );
}
