import React from 'react'
import { FaPen,FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AllUser = () => {
  return (
    <>
        <section className="ml-[69px]">
            <div className="w-[1140px] m-auto">
                <div className="">
                     <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Photo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Joined Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white even:bg-gray-50  border-b ">
                            <td className="px-6 py-4">
                                <img className='w-10 h-10 rounded-full' src="../../../../public/assets/images/my profile.png" alt="" />
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Sourov Dey
                            </th>
                            
                            <td className="px-6 py-4">
                                developer.sourovdey@gmail.com
                            </td>
                            <td className="px-6 py-4">
                                Owner
                            </td>
                            <td className="px-6 py-4">
                                20-11-2023
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex flex-wrap gap-3">
                                    <Link className="font-medium text-red-600 hover:underline"><FaTrash/></Link>
                                    <Link className="font-medium text-blue-600 hover:underline"><FaPen/></Link>
                                </div>
                            </td>

                        </tr>
                        
                    </tbody>
                </table>
                </div>
            </div>
        </section>
    </>
  )
}

export default AllUser