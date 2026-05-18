import React,{useState,useEffect,useRef} from 'react'
import image from './image/amal2.png'
import amal from './image/amal.png'
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
    <div className="">
      <Header/>
<div className="flex justify-around md:m-10 ">
  <div className="flex justify-center md:items-center ">
    <div className="flex flex-col md:bg-white bg-indigo-50 p-10">
    <h1 className='text-blue-800 md:text-4xl text-2xl font-bold mt-20 md:mt-10'>Hi , I'm AMAL</h1>
    <p  className='text-gray-700 md:text-2xl text-lg md:mt-3 mt-1 font-semibold'>React Developer </p>
    <p className='md:min-w-[400px] text-sm md:mt-3 mt-1 text-gray-700'>Building scalable web application with a focus on seamless user experiences and robust backend architecture .</p>
   <a href="about"> <button className='bg-linear-to-r from-violet-600 to-blue-600 text-white font-semibold p-1 mt-5 md:w-[200px] w-[130px] text-sm md:text-md'>More About Me</button></a>
  </div>
  </div>
  <div><img src={image} className='w-[500px] h-[500px] mt-20 hidden md:block'/></div>
</div>
<div className="bg-slate-50">
  <br/>
  <section id="about"></section>
<h1 className='text-center text-2xl font-semibold text-blue-600 mt-3'>About Me</h1>
  <div className="grid md:grid-cols-2 ">
  <div className='flex md:justify-end  justify-center '><img src={amal} className='w-[300px] h-[300px] mt-5'/></div>
  <div className="text-left flex items-center mr-5">
    <h1 data-index="0" ref={(el)=>refs.current[0]=el} className={`text-sm text-gray-800 leading-6 ${animate(0,"up")} m-5 mt-0`}>Iam a passionate Full-Stack Developer with a strong foundation in building dynamic and responsive
     web application.with a computer science background and expertise in the MERN Stack (MongoDB,Express,React and Node.js),
i enjoy solving complex problems through clean,efficient code.iam constantly learning new technologies and am eager to contribute my Skills 
to innovative projects in the IT industry.
    </h1>
    </div>
  </div>
</div>
<section id="skils"></section>
 <h1 className="text-blue-600 text-center mt-3 font-semibold text-xl">Skils</h1>
<div className=" ml-10 mr-10 grid md:grid-cols-2">
  
  <div className="mt-10 ml-auto mr-10">
   
    {/***jj */}
    <div className="flex justify-between w-[300px] mb-2 ">
      <div className="text-sm">React</div>
      <div className="text-sm">85%</div>
    </div>
    <div className="relative">
       <div className="w-[300px] bg-slate-300 h-1 absolute inset-0"> </div>
       <div ref={(el)=>refs.current[1]=el} data-index="1" className={` bg-violet-700 h-1 absolute inset-0 ${leftanimate(1,"react")}`}> </div>
       </div>
       {/*** */}
       <div className="flex justify-between w-[300px] mb-2 mt-10 ">
      <div className="text-sm">Expess Js</div>
      <div className="text-sm">80%</div>
    </div>
    <div className="relative">
       <div className="w-[300px] bg-slate-300 h-1 absolute inset-0"> </div>
       <div ref={(el)=>refs.current[3]=el} data-index="3"  className={` bg-violet-700 h-1 absolute inset-0 ${leftanimate(3,"express")}`}> </div>
       </div>
       </div>
       {/**** */}
       <div className="mt-10 md:ml-10">
    {/***jj */}
    <div className="flex justify-between w-[300px] mb-2 ">
      <div className="text-sm">Javascript</div>
      <div className="text-sm">70%</div>
    </div>
    <div className="relative">
       <div className="w-[300px] bg-slate-300 h-1 absolute inset-0"> </div>
       <div className={` bg-violet-700 h-1 absolute inset-0 ${leftanimate(2,"javascript")}`} data-index="2" ref={(el)=>refs.current[2]=el}> </div>
       </div>
       {/*** */}
       <div className="flex justify-between w-[300px] mb-2 mt-10 ">
      <div className="text-sm">Next Js</div>
      <div className="text-sm">75 %</div>
    </div>
    <div className="relative">
       <div className="w-[300px] bg-slate-300 h-1 absolute inset-0"> </div>
       <div
      ref={(el)=>refs.current[4]=el}
      data-index="4"
          className={`bg-violet-700 h-1 absolute inset-0 ${leftanimate(4,"next")}`}> </div>
       </div>
       </div>
      </div>
      <div className=" mt-10 bg-slate-50">
        <section id="works"></section>
        <h1 className='text-xl font-semibold text-blue-700 text-center mt-10'>My projects</h1>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 ml-10 mr-10 mt-10 mb-10">
          <div className="bg-white md:min-h-[350px]  shadow-2xl ">
          <img src={project1} className=' md:min-h-[200px] min-h-[100px] bg-red-600 w-full'/>
          <h1 className='md:ml-4 ml-2  text-sm'>Disater Management system -React,express,Mysql</h1>
          <button className='border-1 border-indigo-600 md:w-[280px] w-[80%] ml-3 md:ml-4 mr-3 mt-2 text-sm text-indigo-800 p-1 mb-3'>Live preview</button>
          </div>
          <div className="bg-white  shadow-2xl"></div>
          <div className="bg-white shadow-2xl"></div>
          <div className="bg-white   shadow-2xl"></div>
        </div>
      </div>
    </div>
  )
}
