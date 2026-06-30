import React,{useState,useEffect,useRef} from 'react'
import image from './image/amal3.png'
import project2 from './image/project2.jpg'
import project1 from './image/project1.png'
import Header from './Header'

export default function App() {
  const[visible,setvisible]=useState([])
  const refs=useRef([])
  useEffect(()=>{
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        const index=entry.target.dataset.index;
        setvisible((prev)=>{
          const update=[...prev]
          update[index]=entry.isIntersecting; 
          return update
        })
      })
    },{threshold:0.15})
    refs.current.forEach((el)=>el&& observer.observe(el))
    return()=>observer.disconnect()
  },[])
  const animate=(index,dir)=>{
    const base="transition-all duration-700";
    const show="opacity-100 ";
    const hidden={
      left:"opacity-0 -translate-x-20",
      right:"opacity-0 translate-x-20",
      up:"opacity-0 translate-y-20"
    }
    return `${base} ${visible[index]?show:hidden[dir]}  `
  }
    const leftanimate=(index,body)=>{
    const base="transition-all duration-700";
    const show={
     react: "w-[250px]",
     javascript:"w-[170px]",
     express:"w-[200px]",
     next:"w-[190px]"
    };
    const hidden="w-[0px]"
    return `${base} ${visible[index]?show[body]:hidden}  `
  }

  return (
    <div className="bg-slate-800">
      <Header/>
<div className="flex justify-around md:m-10 ">
  <div className="flex justify-center md:items-center ">
    <div className="flex flex-col  p-10">
      <div className="flex"><h1 className='text-white md:text-4xl text-2xl font-bold mt-20 md:mt-10  '>Hi , I'm</h1> <h1 className='bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent md:text-4xl text-2xl font-bold mt-20 md:mt-10 ml-3'>AMAL</h1></div>
    
    <p  className='text-gray-700 md:text-2xl text-lg md:mt-3 mt-1 font-semibold text-slate-200'>React Developer </p>
    <p className='md:min-w-[400px] text-sm md:mt-3 mt-1 text-gray-700 text-slate-200'>Building scalable web application with a focus on seamless user experiences and robust backend architecture .</p>
   <a href="about"> <button className='bg-linear-to-r from-violet-600 to-blue-600 text-white font-semibold p-1 mt-5 md:w-[200px] w-[130px] text-sm md:text-md'>More About Me</button></a>
  </div>
  </div>
  <div><img src={image} className='w-[400px] h-[450px] mt-20 hidden md:block'/></div>
</div>
<div className="">
  <br/>
  <hr className='border-gray-700'></hr>
  <section id="about"></section>
<h1 className='text-center text-3xl font-semibold bg-linear-to-r from-blue-500 to-red-700 bg-clip-text text-transparent mt-3'>About Me</h1>
  <div className="md:flex flex-col ">
    <div className="Md:ml-10 w-full flex justify-center"><img src={image} className='w-[200px] h-[220px] mt-5 md:hidden block '/></div>
    <div className="m-10 ">
    <h1 data-index="0" ref={(el)=>refs.current[0]=el} className={`text-xs md:text-sm text-white text-gray-800 leading-6 ${animate(0,"up")} `}>Iam a passionate Full-Stack Developer with a strong foundation in building dynamic and responsive
     web application.with a computer science background and expertise in the MERN Stack (MongoDB,Express,React and Node.js),
i enjoy solving complex problems through clean,efficient code.iam constantly learning new technologies and am eager to contribute my Skills 
to innovative projects in the IT industry.
    </h1>
    </div>
 
  </div>
</div>
<section id="skils"></section>

 <h1 className="text-blue-600 text-center mt-3 font-semibold text-2xl  bg-linear-to-r from-blue-500 to-red-700 bg-clip-text text-transparent">Skils</h1>
<div className=" ml-10 mr-10 grid md:grid-cols-2">
  
  <div className="mt-10 ml-auto mr-10">
   
    {/***jj */}
    <div className="flex justify-between w-[300px] mb-2 ">
      <div className="text-sm text-white">React</div>
      <div className="text-sm text-white">85%</div>
    </div>
    <div className="relative">
       <div className="w-[300px] bg-slate-300 h-1 absolute inset-0"> </div>
       <div ref={(el)=>refs.current[1]=el} data-index="1" className={` bg-linear-to-r from-blue-600 to-purple-600 h-1 absolute inset-0 ${leftanimate(1,"react")}`}> </div>
       </div>
       {/*** */}
       <div className="flex justify-between w-[300px] mb-2 mt-10 ">
      <div className="text-sm text-white">Expess Js</div>
      <div className="text-sm text-white">80%</div>
    </div>
    <div className="relative">
       <div className="w-[300px] bg-slate-300 h-1 absolute inset-0"> </div>
       <div ref={(el)=>refs.current[3]=el} data-index="3"  className={` bg-linear-to-r from-blue-600 to-purple-600 h-1 absolute inset-0 ${leftanimate(3,"express")}`}> </div>
       </div>
        {/***jj */}
    <div className="flex justify-between w-[300px] mb-2 mt-10">
      <div className="text-sm text-white">MYSQL</div>
      <div className="text-sm text-white">85%</div>
    </div>
    <div className="relative">
       <div className="w-[300px] bg-slate-300 h-1 absolute inset-0"> </div>
       <div ref={(el)=>refs.current[1]=el} data-index="1" className={` bg-linear-to-r from-blue-600 to-purple-600 h-1 absolute inset-0 ${leftanimate(1,"react")}`}> </div>
       </div>
       </div>
       
       {/**** */}
       <div className="mt-10 md:ml-10">
    {/***jj */}
    <div className="flex justify-between w-[300px] mb-2 ">
      <div className="text-sm text-white">Javascript</div>
      <div className="text-sm text-white">70%</div>
    </div>
    <div className="relative">
       <div className="w-[300px] bg-slate-300 h-1 absolute inset-0"> </div>
       <div className={` bg-linear-to-r from-blue-600 to-purple-600 h-1 absolute inset-0 ${leftanimate(2,"javascript")}`} data-index="2" ref={(el)=>refs.current[2]=el}> </div>
       </div>
       {/*** */}
       
       <div className="flex justify-between w-[300px] mb-2 mt-10 ">
      <div className="text-sm text-white">Next Js</div>
      <div className="text-sm text-white">75 %</div>
    </div>
    <div className="relative">
       <div className="w-[300px] bg-slate-300 h-1 absolute inset-0"> </div>
       <div
      ref={(el)=>refs.current[4]=el}
      data-index="4"
          className={`bg-linear-to-r from-blue-600 to-purple-600 h-1 absolute inset-0 ${leftanimate(4,"next")}`}> </div>
       </div>
        {/***jj */}
    <div className="flex justify-between w-[300px] mb-2 mt-10 ">
      <div className="text-sm text-white">MongoDB</div>
      <div className="text-sm text-white">85%</div>
    </div>
    <div className="relative">
       <div className="w-[300px] bg-slate-300 h-1 absolute inset-0"> </div>
       <div ref={(el)=>refs.current[1]=el} data-index="1" className={` bg-linear-to-r from-blue-600 to-purple-600 h-1 absolute inset-0 ${leftanimate(1,"react")}`}> </div>
       </div>
       </div>
      </div>
      <div className=" mt-10 ">
        <section id="works"></section>
        <h1 className='text-2xl font-semibold bg-linear-to-r from-blue-500 to-red-700 bg-clip-text text-transparent text-center mt-10'>My projects</h1>

        <div className="grid md:grid-cols-3 grid-cols-2 gap-5 ml-10 mr-10 mt-10 mb-10">
         {/** */}
         <div className="bg-slate-800 border border-gray-700 shadow-xs shadow-gray-600 rounded-md">
            <div className="md:flex   ">
              <div className=""><img src={project1} className='md:w-[200px] w-full h-[100px] p-2'/></div>
            
            <div className="ml-2">
                <h2 className='font-semibold text-white text-md md:text-lg '>Disaster management system</h2>
                <p className='text-gray-400 text-xs mt-1 md:text-sm'>A Full stack web application for managing disster,resource and relif operations efficiently</p>
                <h3 className='text-indigo-500 text-sm md:text-md '>Live Preview </h3>
            </div>
            </div>
           </div>
             {/** */}
             {/** */}
          <div className="bg-slate-800 border border-gray-700 shadow-xs shadow-gray-600 rounded-md">
            <div className="md:flex   ">
              <div className=""><img src={project1} className='md:w-[200px] w-full h-[100px] p-2'/></div>
            
            <div className="ml-2">
                <h2 className='font-semibold text-white text-md md:text-lg '>Disaster management system</h2>
                <p className='text-gray-400 text-xs mt-1 md:text-sm'>A Full stack web application for managing disster,resource and relif operations efficiently</p>
                <h3 className='text-indigo-500 text-sm md:text-md '>Live Preview </h3>
            </div>
            </div>
           </div>
             {/** */}
             {/** */}
          <div className="bg-slate-800 border border-gray-700 shadow-xs shadow-gray-600 rounded-md">
            <div className="md:flex   ">
              <div className=""><img src={project2} className='md:w-[200px] w-full h-[100px] p-2'/></div>
            
            <div className="ml-2">
                <h2 className='font-semibold text-white text-md md:text-lg '>Todo List</h2>
                <p className='text-gray-400 text-xs mt-1 md:text-sm'>A simple and responsive todo list application build using react.it allow users to add,delete and edit list</p>
                <a href="https://myportfolio-mauve-omega-62.vercel.app/" className='text-indigo-500 text-sm md:text-md '>Live Preview </a>
            </div>
            </div>
           </div>
             {/** */}
          
        </div>
       <br/><br/>
      </div>
    </div>
  )
}
