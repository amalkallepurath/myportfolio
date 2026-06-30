import React,{useState} from 'react'
import menu from './image/menu.jpg'
import {Link} from 'react-router-dom'
export default function Header() {
  const[toggle,settoggle]=useState(false)
  return (
  
    <div>

    <div className='bg-white  flex justify-between p-2'>
      <div className="">
      <img src={menu} alt="" className='w-7 h-7 rounded-full ml-5 md:hidden block'onClick={()=>{settoggle(!toggle)}} /> 
       <div className="md:block hidden">
        <div className="flex justify-around mt-2">
         
           
      <Link to='/' > <h1 className='text-sm ml-10  bg-indigo-50 rounded-2xl pl-5 pr-5 items-center p-1 pb-1 text-indigo-900 font-semibold'>Home</h1></Link>
       <a href='#works'><h1 className='text-sm ml-10 text-indigo-900 font-semibold p-1 hover:bg-indigo-50 hover:rounded-2xl'>Works</h1></a> 
       <a href='#about'> <h1 className='text-sm ml-10 text-indigo-900 font-semibold p-1'>About</h1></a>
        </div>
        </div>
      </div>
      <div className="mr-5 mt-2">
            <button className='bg-black rounded-sm text-white pl-3 pr-3 ml-15 text-sm p-1 font-semibold hidden md:block'>Hire Me</button>
      
        </div>
    
        </div>
        {/** mobile menu */}
        <div className={`bg-slate-800 h-[100vh] w-full fixed transform ${toggle ? "translate-x-0":"-translate-x-full"} transition-transform duration-700 ease-in-out md:hidden`}>
        <div className=" flex justify-center pt-10">
        <div className="flex flex-col justify-center">
         
    
         <Link to='/' > <h1 className='text-md text-white p-1 font-semibold '>Home</h1></Link>
          <a href='#works'><h1 className='text-md  text-white font-semibold p-1 mt-3 '>Works</h1></a> 
          <a href='#about'> <h1 className='text-md  text-white font-semibold p-1 mt-3'>About</h1></a>
           </div>
           </div>
        </div>
       
    </div>
  )
}



