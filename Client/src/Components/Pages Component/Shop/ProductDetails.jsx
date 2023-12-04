import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ShopTopMenu from './ShopTopMenu'
import ShopMainMenu from './ShopMainMenu'
import Campain from '../../Public Component/Campain'
import { FaRegHeart } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";
import { IoMdCheckmark } from "react-icons/io";
import Footer from '../../Public Component/Footer'


const ProductDetails = () => {
    const {id:productId} = useParams();
    const [product, setProduct] = useState({ })
    console.log(product)
    useEffect(() =>{
        const fetchProduct = async() =>{
            try {
        const {
          data: { data },
        } = await axios.get(
          `http://localhost:8080/productApi/products/${productId}?populate=*`
        );
        // console.log(data);
        setProduct(data);
        // console.log(data);
      } catch (error) {
        console.log({ error });
      }
        };
        if(productId){
            fetchProduct()
        }
    },[productId])
  return (
    <>
    <ShopTopMenu/>
    <ShopMainMenu/>
    <Campain/>

    <section className='mt-14'>
                {/* container */}
                <div className='w-[1140px] m-auto'>
                    <div className="flex flex-wrap justify-between mb-[60px]">
                        {/* Card */}
                                        
                        <div className="w-[50%]">
                            <div className="w-[500px]">
                                <img className='w-full' src={product.productImg} alt="" />
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <div className="">
                                <h1 className="text-[#27272E] text-[36px] font-bold mb-[18px]">{product.productName}</h1>
                                <div className=" flex flex-wrap items-center mb-5">
                                    <span className='text-2xl text-black font-medium mr-[10px]'>${product.productPrice}.00</span>
                                    <del className='text-2xl text-[#777777] font-medium mx-[10px]'>${product.productDiscPrice}.00</del>
                                    <span className='px-[20px] py-[5px] mx-[10px] text-base rounded-3xl text-white leading-10 bg-[#E76458]'>{product.productDiscount}% OFF</span>
                                </div>
                                <div className="flex flex-wrap gap-2 pb-5 mb-5 border-b-2">
                                    <div className="flex flex-wrap items-center gap-1 text-[#ffdc60] text-[14px]">
                                        <TiStarFullOutline fontSize={20}/>
                                        <TiStarFullOutline fontSize={20}/>
                                        <TiStarFullOutline fontSize={20}/>
                                        <TiStarFullOutline fontSize={20}/>
                                        <TiStarOutline fontSize={20}/>
                                    </div>
                                    <span className='text-[#777777] text-[16px] cursor-pointer duration-300 ease-in-out hover:text-[#292930]'>(2 customer reviews)</span>
                                </div>
                                <div className="mb-5 text-[#3577f0] text-base font-medium flex flex-wrap gap-5">
                                    <div className="flex flex-col gap-2">
                                        <IoMdCheckmark fontSize={22}/>
                                        <IoMdCheckmark fontSize={22}/>
                                        <IoMdCheckmark fontSize={22}/>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span>In stock</span>
                                        <span>Free delivery available</span>
                                        <span>Sales 30% Off Use Code: MOTIVE30</span>
                                    </div>
                                </div>
                                <p className="text-base text-[#777777] font-normal mb-8 leading-relaxed">
                                    {product.smallText}
                                </p>
                                <div className="flex flex-wrap items-center gap-3">
                                    <button className='hover:scale-105 ease-in-out duration-500 bg-[#3577f0] text-[16px] text-white font-bold px-[38px] focus:outline-none py-4  rounded-md'>Add to Cart</button>
                                    <button className='hover:scale-105 ease-in-out duration-500 bg-[#E76458] text-[16px] text-white font-black p-[18px] focus:outline-none  rounded-md'><FaRegHeart fontSize={20}/></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* container 2 */}
                <div className="bg-[#f9f3f0] pt-[80px]">
                    <div className="w-[1140px] m-auto">
                        <h1 className="text-[#292930] text-[24px] font-bold pb-[60px]">Description</h1>
                        <div className="flex flex-wrap flex-row w-full items-center justify-between pb-[60px]">
                            <div className="w-[45%]">
                                <h1 className="text-[#292930] text-[20px] font-bold pb-[20px]">Specifications:</h1>
                                <p className="text-[#777777] text-[16px] font-normal pb-[20px]">
                                    {product.specificationsText}
                                </p>
                            </div>
                            <div className="w-[45%]">
                                <h1 className="text-[#292930] text-[20px] font-bold pb-[20px]">Care & Maintenance:</h1>
                                <p className="text-[#777777] text-[16px] font-normal pb-[20px]">
                                    {product.careMainText}
                                </p>
                            </div>
                        </div>
                        <h1 className="text-[#292930] text-[24px] font-bold pb-[60px]">Additional Information</h1>
                        <div className="pb-14">
                            <div className="p-12 bg-white rounded-md">
                            <table className="w-full text-base text-left rtl:text-right text-gray-500 ">
                                
                                <tbody>
                                    <tr className="odd:bg-gray-50 even:bg-white">
                                        <th scope="row" className="px-20 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Stand Up
                                        </th>
                                        <td className="px-6 py-4">
                                            35″L x 24″W x 37-45″H(front to back wheel)
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-gray-50 even:bg-white">
                                        <th scope="row" className="px-20 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Stand Up
                                        </th>
                                        <td className="px-6 py-4">
                                            35″L x 24″W x 37-45″H(front to back wheel)
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-gray-50 even:bg-white">
                                        <th scope="row" className="px-20 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Stand Up
                                        </th>
                                        <td className="px-6 py-4">
                                            35″L x 24″W x 37-45″H(front to back wheel)
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-gray-50 even:bg-white">
                                        <th scope="row" className="px-20 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Stand Up
                                        </th>
                                        <td className="px-6 py-4">
                                            35″L x 24″W x 37-45″H(front to back wheel)
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-gray-50 even:bg-white">
                                        <th scope="row" className="px-20 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Stand Up
                                        </th>
                                        <td className="px-6 py-4">
                                            35″L x 24″W x 37-45″H(front to back wheel)
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-gray-50 even:bg-white">
                                        <th scope="row" className="px-20 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Stand Up
                                        </th>
                                        <td className="px-6 py-4">
                                            35″L x 24″W x 37-45″H(front to back wheel)
                                        </td>
                                    </tr>
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
    </section>

    <Footer/>

    </>
  )
}

export default ProductDetails