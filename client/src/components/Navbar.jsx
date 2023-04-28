
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div>
        <div className='w-full h-[6rem] bg-tertiary-500 flex items-center justify-center'>
           <Link to={'/'}><div className='flex-1 flex items-center justify-start'>
                <img className='w-[4rem] h-auto mx-4' src="img/logo.png" alt="" />
                <h1 className='text-primary-500 font-bold text-[3rem]'>Mellow</h1>
           </div></Link>

           <div className='flex-1'>

           </div>

           <div className='flex-1'>

          </div>
        </div>
    </div>
  )
}

export default Navbar