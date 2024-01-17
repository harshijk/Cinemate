import pagenot from '../assets/pagenotfounf.jpg'
import { Link } from 'react-router-dom'
import { Button } from '../components';
import { useEffect } from 'react';

export const PageNotFound = () => {

  useEffect(()=>{
    document.title =`Page Not Found || Cinemate`
  })

  return (
    <main>
    <section className="flex flex-col justify-center px-2">
      <div className="flex flex-col items-center my-4">
        <p className="text-2xl dark:text-white">404, OOPS PAGE NOT FOUND</p>
        <div className="max-w-48 mt-5">
          <img className="rounded" src={pagenot} alt="Page no found" />
        </div>
      </div>
      <div className='flex justify-center'>
       <Link to='/'> 
       <Button>BACK TO HOME</Button>
       </Link>
      </div>
    </section>
    </main>
  )
}
