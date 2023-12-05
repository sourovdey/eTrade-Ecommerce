import React from 'react'
import { GoEye } from "react-icons/go";
import { LuArrowUp } from "react-icons/lu";

const TotalVeiws = () => {
  return (
    <>
        <div className="p-6 border rounded-md">       
            <div className='text-[#3C50E0] mb-4 w-12 h-12 flex flex-wrap items-center justify-center rounded-full bg-[#EFF2F7]'>
                    <GoEye fontSize={18}/>
            </div>
            <h2 className="text-[#1C2434] text-[26px] font-bold">3.456K</h2>
            <div className=" flex flex-wrap items-center justify-between">
                <div className='text-[#64788F] text-[14px] mr-9'>Total views</div>
                <div className="flex flex-wrap text-[#65D2AE] text-[16px] mr-1">0.43%<span><LuArrowUp fontSize={20}/></span></div>
            </div>
        </div>
    </>
  )
}

export default TotalVeiws