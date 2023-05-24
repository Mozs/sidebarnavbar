import { React, useState } from 'react'

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
  return (
   <>
   {!isOpen ?
    (
        <button className="fixed z-30 flex items-center cursor-pointer right-10 top-6" 
        onClick={() => setIsOpen(!isOpen)}>
            <div className="relative flex overflow-hidden items-center
             justify-center rounded-full w-[50px] h-[50px] 
             transform transition-all bg-slate-700 
            ring-0 ring-gray-100 hover:ring-6 group-focus:ring-4 
            ring-opacity-10 duration-150 shadow-md">
              <div className="flex flex-col pt-1 justify-between w-[20px] 
              h-[20px] transform transition-all duration-100 
              origin-center overflow-hidden group-focus:rotate-90">
                <div className="bg-white h-[2px] w-7 transform transition-all 
                duration-300 group-focus:w-0 delay-75"></div>
                <div className="bg-white h-[2px] w-7 rounded transform 
                transition-all duration-300 group-focus:w-0 delay-75"></div>
                <div className="bg-white h-[2px] w-7 transform transition-all
                duration-300 group-focus:w-0 delay-75"></div>

              </div>
            </div>        
        </button>
    ) :
    (
   <button className='top-4 right-4 text-xl text-white 
   fixed overflow-hidden transform transition-all duration-300 
   group-focus:w-12 group-focus:h-12 
   group-focus:-mt-3 delay-150'
    onClick={() => {
    setIsOpen(!isOpen)
   }}>
        <svg xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6h-6 w-6  text-white" fill="none"
         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" 
        d="M19 9l-7 7-7-7" />
        </svg>
   </button>
  )
    }
    <div className={`right-0 top-0 fixed bg-green-500 
   w-[35vw] h-full p-10 
   ${isOpen ? 'translate-x-0': 'translate-x-full'} ease-in-out duration-3000`}>
   
       <h2 className="text-2xl text-white">This is the Sidebar</h2>
   </div>
   </>
  )
}