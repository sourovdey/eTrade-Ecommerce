import React from 'react'
import {FaFire} from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/Ai';
import {AiFillStar} from 'react-icons/Ai';
import {AiOutlineStar} from 'react-icons/Ai';
// import imssg from "../../../../public/assets/images/author1.png"

const HeroSection = () => {
  return (
    <>
        <section className='bg-[#F9F3F0] font-DMSans py-[90px]'>
            <div className="w-[1140px] m-auto">
                <div className="flex flex-wrap items-center px-[18px]">
                    <div className="w-[40%]">
                        <span className='flex flex-wrap items-center mb-[16px]'><span className='flex flex-wrap items-center justify-center w-6 h-6 bg-[#ff497c] text-white rounded-full mr-[10px]'><FaFire fontSize={12}/></span>  <span className='text-[14px] text-[#ff497c] font-extrabold'>Hot Deal In This Week</span></span>
                        <h1 className='text-[60px] mb-[50px] font-bold text-[#292930] leading-tight'>Roco Wireless Headphone</h1>
                        <div className="flex flex-wrap gap-7">
                            <p className=' px-[38px] py-[16px] bg-white rounded-md flex flex-wrap items-center cursor-pointer ease-in-out duration-300 hover:scale-105'><span className='text-[#292930] mr-2 hover:scale-100'><AiOutlineShoppingCart fontSize={20}/></span> <span className='text-[#292930] text-[16px] font-bold hover:scale-100'>Shop Now</span></p>
                            <div className="flex flex-wrap items-center gap-3">
                                <ul className='flex flex-wrap'>
                                    <li><img className=' border-[2px] border-white rounded-full' src="../../../../public/assets/images/author1.png" alt="" /></li>
                                    <li className='ml-[-20px]'><img className=' border-[2px] border-white rounded-full' src="../../../../public/assets/images/author2.png" alt="" /></li>
                                    <li className='ml-[-20px]'><img className=' border-[2px] border-white rounded-full' src="../../../../public/assets/images/author3.png" alt="" /></li>
                                    <li className='ml-[-20px]'><img className=' border-[2px] border-white rounded-full' src="../../../../public/assets/images/author4.png" alt="" /></li>
                                </ul>
                                <div className="">
                                    <span>
                                        <ul className='flex flex-wrap'>
                                            <li className='text-[#ffa800]'><AiFillStar/></li>
                                            <li className='text-[#ffa800]'><AiFillStar/></li>
                                            <li className='text-[#ffa800]'><AiFillStar/></li>
                                            <li className='text-[#ffa800]'><AiFillStar/></li>
                                            <li className='text-[#ffa800]'><AiOutlineStar/></li>
                                        </ul>
                                    </span>
                                    <span className='flex text-[12px] text-[#777777] font-medium'><span className='mr-1 font-bold text-[#292930]'>100+</span>Reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[60%] flex flex-wrap justify-between align-bottom">
                        <div className="w-[35%] relative">
                            <div className='w-[500px]'><img src="../../../../public/assets/images/product-38.png" alt="" /></div>
                            <div className="top-[50px] right-0 absolute w-[100px] h-[100px] bg-white rounded-full text-center flex flex-wrap items-center justify-center content-center">
                                <p className='text-[#777777]'>From</p>
                                <h2 className='text-[#3577f0] text-[18px] font-bold'>$49.00</h2>
                            </div>
                        </div>
                        <div className="w-[25%] flex flex-wrap content-end">
                            <div className='w-[300px]'><img className='w-full' src="../../../../public/assets/images/product-39.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HeroSection