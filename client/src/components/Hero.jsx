
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'


const Hero = () => {
    return (
        <div className="w-full h-[20rem] flex items-center justify-center relative">
            <img className="w-full h-full object-cover overflow-hidden" src="/img/banner1.jpg" alt="" />
            <div className="absolute bg-frost-300 h-[12rem] w-[95%] md:w-1/2 rounded-md flex items-center justify-center">
               <input className='bg-frost-200 focus:bg-white w-3/4 h-[4rem] pl-2 rounded-l' type="text" placeholder='Enter an address, city, or ZIP code'/>
               <button className='bg-secondary-500 h-[4rem] w-[4rem] flex items-center justify-center hover:bg-primary-500 transition rounded-r'><MagnifyingGlassIcon className='w-[2rem] h-auto' /></button>
            </div>
        </div>
    )
}

export default Hero
