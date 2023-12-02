import React from 'react'
import { FaEye } from "react-icons/fa";
import { PiHeartThin} from 'react-icons/Pi';
import '../../../../src/App.css'
import { Link } from 'react-router-dom';


const AllProduct = ({data}) => {
    
    // console.log(data.productName)
    // let mainprice = data.productDiscPrice
    // let discprice = data.productPrice

    // const percentageDiscount = ((mainprice - discprice) / mainprice) * 100;
    // return percentageDiscount.toFixed(2);

    // ../../../../public/assets/images/product-01.png
    
  return (
    <>
        <div className="maincard relative mt-10">
                        
            <span className='absolute right-[-20px] top-8 z-40 bg-[#3577f0] px-[10px] py-[5px] text-[12px] font-bold shawDowPercent text-white rounded'>{data.productDiscount}% OFF</span>
            <Link to={`productdetails/${data.productName}/${data._id}`}>
                <div className="bg-[#F6F7FB] p-2 rounded-md cursor-pointer">
                    <div className="w-[250px]">
                        <img className='hover:scale-105 w-full ease-in-out duration-500' src={data.productImg} alt="" />
                    </div>
                    
                    <div className='mt-[-50px] flex flex-wrap items-center w-full justify-between'>
                        <div className="itemsss opacity-0 ease-in-out duration-500 translate-y-[40px] bg-white p-3.5 mx-1 text-black rounded cursor-pointer"><PiHeartThin/></div>
                        <button className='itemsss opacity-0 ease-in-out duration-500 translate-y-[40px] bg-[#ff497c] focus:border-none text-[14px] text-white font-bold p-3 rounded'>Add to Cart</button>
                        <div className="opacity-0 itemsss ease-in-out duration-500 translate-y-[40px] bg-white p-3.5 mx-1 text-black rounded cursor-pointer"><FaEye/></div>
                    </div>
                </div>
            </Link>

            <h4 className='text-[#777777] text-[16px] font-medium hover:text-[#3577f0] mt-[10px] ease-in-out duration-300 cursor-pointer'>{data.productName}</h4>
            <h1 className='text-[#292930] text-[20px] font-bold '>${data.productPrice}<del className='mx-1 text-[#d6d6d6]'>${data.productDiscPrice}</del></h1>
        </div>
    </>
  )
}

export default AllProduct