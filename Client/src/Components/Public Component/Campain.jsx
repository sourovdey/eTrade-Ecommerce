import React from 'react';
import { useState } from 'react';
// import bg from "../../../public/assets/images/campaign-bg2.png"
// import Xsvg from "../../../public/assets/images/tabler_x.svg"


const Campain = () => {
    const [isToggled, setToggled] = useState(false);

    const hideAds = () => {
        setToggled((prev) => !prev);
    };
  return (
    <>
        <section className={`block relative ${isToggled ? 'hidden' : ''}` }>
            <div className=" text-center px-0 py-[8px] w-full h-[40px] bg-[url('../../../public/assets/images/campaign-bg2.png')] bg-no-repeat bg-cover">
                <p className='text-[#eeb2ff] text-[14px]'>Introductory Offer Get Upto 40% Off <a href="#" className='hover:text-[#ff497c] ease-in-out duration-300 font-bold underline text-white'>Buy Now</a></p>
                <div className='absolute right-10 top-2.5'>
                    <div onClick={hideAds}  className='cross w-[20px] h-[20px] cursor-pointer'><img className='w-full ease-in-out duration-300 hover:scale-110' src="../../../public/assets/images/tabler_x.svg" alt="" /></div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Campain