import React from 'react'
import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";


const TopVar = () => {
  return (
    <>
        <div className="">
              <section className=' ml-[69px] border border-b border-l-0 border-t-0 border-r-0'>
                  <div className="w-[1140px] m-auto py-3">
                      <div className="flex justify-between flex-wrap gap-3 items-center">
                        <div className="relative px-10 py-2 text-[#1e293b] bg-[#e9eef5] rounded-full">
                          <input className='bg-[#e9eef5] text-[#1e293b] focus:outline-none text-[14px]' type="text" placeholder='search here...'/>
                          <div className="absolute top-2.5 left-2.5 text-[#31435f]"><CiSearch fontSize={20}/></div>
                        </div>
                        <div className="flex flex-wrap gap-5 items-center">
                          <div className="flex relative">
                            <img className='rounded-full w-10 h-10' src="../../../public/assets/images/my profile.png" alt="" />
                            <span className='absolute right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#10b981]'></span>
                          </div>
                          <div className="text-[#31435f] relative">
                            <GoBell fontSize={20}/> 
                            <span className='absolute top-[-10px] right-[-10px] h-full w-full animate-ping rounded-full bg-[#f000b9] opacity-80'></span>
                            <span className="absolute top-[-4px] right-[-3px] h-2 w-2 rounded-full bg-[#f000b9]"></span>
                          </div>
                        </div>
                      </div>
                  </div>
              </section>
        </div>
    </>
  )
}

export default TopVar