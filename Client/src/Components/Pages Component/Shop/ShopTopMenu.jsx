import React from 'react'

const ShopTopMenu = () => {
  return (
    <>
      <section className='bg-[#F9F3F0]'>
        <div className='w-[1140px] m-auto'>
          <div className="py-[8px] text-[14px] cursor-pointer text-[#777777] font-DMSans flex flex-wrap justify-between ">
              <div className="">
                <ul className="flex flex-wrap">
                  <li className='px-[18px] hover:text-[#3577f0] ease-in-out duration-300 ' ><a href=""></a>English</li>
                  <li className='px-[18px] hover:text-[#3577f0] ease-in-out duration-300 ' ><a href=""></a>USD</li>
                </ul>
              </div>
              <div className="">
                <ul className='flex flex-wrap'>
                  <li className='px-[18px] hover:text-[#3577f0] ease-in-out duration-300 ' ><a href=""></a>Help</li>
                  <li className='px-[18px] hover:text-[#3577f0] ease-in-out duration-300 ' ><a href=""></a>join Us</li>
                  <li className='px-[18px] hover:text-[#3577f0] ease-in-out duration-300 ' ><a href=""></a>Sign in</li>
                </ul>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopTopMenu