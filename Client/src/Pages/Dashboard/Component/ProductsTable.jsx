import React from 'react'
import {useState,useEffect} from 'react'
import { getProduct,deleteProduct } from '../../../helper/helper'
import { FaPen,FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ProductStore } from '../../../store/Store';

const ProductsTable = () => {
    let [product, setProduct] = useState([]);
    const addsProduct = ProductStore((state) => state.addsProduct);
    const dataShowHandler = async () => {
        let showDB = await getProduct();
        setProduct(showDB.products);
    };

    useEffect(() => {
     dataShowHandler()
    }, []);

    let deleteHandelar = (id) =>{
        dataShowHandler();
        deleteProduct(id);
        dataShowHandler();
    }

    let updateHandelar = async(id)=>{      
      addsProduct(product.filter((product) => product._id == id));      
    }
  return (
    <>
      <section className='ml-[69px]'>
        <div className="w-[1140px] m-auto">
            <div className="">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                S.L
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Photo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Discount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        { 
                            product.map((productsData, index)=>(
                                

                            <tr key={productsData._id} className="odd:bg-white even:bg-gray-50  border-b ">
                                <td className="px-6 py-4">
                                    {index+1}
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {productsData.productName}
                                </th>
                                <td className="px-6 py-4">
                                    <img className='w-10 h-10 rounded' src={productsData.productImg} alt="" />
                                </td>
                                <td className="px-6 py-4">
                                    {productsData.productColor}
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    {productsData.productQty}
                                </td>
                                <td className="px-6 py-4">
                                    {productsData.productDiscount}%
                                </td>
                                <td className="px-6 py-4">
                                    ${productsData.productPrice}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-wrap gap-3">
                                        <button onClick={() => deleteHandelar(productsData._id)} className="font-medium text-red-600 hover:underline"><FaTrash/></button>
                                        <Link onClick={() => updateHandelar(productsData._id)} to="/dashboard/editProduct" className="font-medium text-blue-600 hover:underline"><FaPen/></Link>
                                    </div>
                                </td>

                            </tr>

                            ))
                            
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
      </section>
    </>
  )
}

export default ProductsTable