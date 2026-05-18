import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <div className='bg-white  flex justify-between p-2'>
        <div className="flex justify-around mt-2">
            
      <Link to='/' > <h1 className='text-sm ml-10  bg-indigo-50 rounded-2xl pl-5 pr-5 items-center p-1 pb-1 text-indigo-900 font-semibold'>Home</h1></Link>
       <a href='#works'><h1 className='text-sm ml-10 text-indigo-900 font-semibold p-1 hover:bg-indigo-50 hover:rounded-2xl'>Works</h1></a> 
       <a href='#about'> <h1 className='text-sm ml-10 text-indigo-900 font-semibold p-1'>About</h1></a>
        </div>
        <div className="mr-5 mt-2">
            <button className='bg-black rounded-sm text-white pl-3 pr-3 ml-15 text-sm p-1 font-semibold hidden md:block'>Hire Me</button>
        </div>

    
    </div>
  )
}

