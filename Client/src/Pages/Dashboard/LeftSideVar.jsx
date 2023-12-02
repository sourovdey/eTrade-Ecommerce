import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { Tooltip as ReactTooltip } from "react-tooltip";
import '../../../src/App.css'
// import icon from "../../../public/assets/images/favicon.png"

const LeftSideVar = () => {
    const [isToggledOne, setToggledOne] = useState(false);
    const [isToggledTwo, setToggledTwo] = useState(false);
    const [isToggledThree, setToggledThree] = useState(false);
    const [isToggledFour, setToggledFour] = useState(false);


    const hideActionOne = () => {
        setToggledOne((prev) => !prev);
    };
    const hideActionTwo = () => {
        setToggledTwo((prev) => !prev);
    };
    const hideActionThree = () => {
        setToggledThree((prev) => !prev);
    };
    const hideActionFour = () => {
        setToggledFour((prev) => !prev);
    };

    const handleClickOutside = (event) => {
    const menuElement = document.getElementById('hide-id'); 

    // Check if the clicked element is outside the menu
    if (menuElement && !menuElement.contains(event.target)) {
      setToggledOne(false);
      setToggledTwo(false);
      setToggledThree(false);
      setToggledFour(false);
    }
  };
  useEffect(() => {
    // Attach the event listener on mount
    document.addEventListener('mousedown', handleClickOutside);

    // Detach the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

//   let clickwork = () =>{
//     console.log("clicked")
//   }
  
  return (
    <>
        <section className='fixed left-0 top-0 h-full'>           
            <div className="border-r border-slate-150 px-3 h-full">
                <div className="flex h-full w-full flex-col items-center justify-between bg-white">  
                    <div className="flex pt-4">
                            <Link to="/">
                                <img className='h-11 w-11 transition-transform duration-500 ease-in-out hover:rotate-[360deg]' src="../../../public/assets/images/favicon.png" alt="" />
                            </Link>
                    </div>
                    <div className="is-scrollbar-hidden flex-grow flex-shrink-0 flex flex-col space-y-4 overflow-y-auto pt-6">
                        {/* bg-[rgba(79,70,229,.1)] */}
                        <Link data-tooltip-id="my-tooltip-1" className='flex h-11 w-11 items-center justify-center rounded-lg  text-primary outline-none transition-colors duration-200 hover:bg-[rgba(79,70,229,.2)] focus:bg-[rgba(79,70,229,.2)] active:bg-[rgba(79,70,229,.25)]'>
                            <img src="../../../public/assets/images/house user.svg" alt="" />
                        </Link>
                        <ReactTooltip
                            
                            id="my-tooltip-1"
                            place="right"
                            variant="info"
                            content="Dashboard"
                        />
                        <Link data-tooltip-id="my-tooltip-2" className='flex h-11 w-11 items-center justify-center rounded-lg  text-primary outline-none transition-colors duration-200 hover:bg-[rgba(79,70,229,.2)] focus:bg-[rgba(79,70,229,.2)] active:bg-[rgba(79,70,229,.25)]'>
                            <img src="../../../public/assets/images/Shopping Cart Check.svg" alt="" />
                        </Link>
                        <ReactTooltip
                            id="my-tooltip-2"
                            place="right"
                            variant="info"
                            content="Oders"
                        />
                        <Link onClick={hideActionOne} data-tooltip-id="my-tooltip-3" className='flex h-11 w-11 items-center justify-center rounded-lg  text-primary outline-none transition-colors duration-200 hover:bg-[rgba(79,70,229,.2)] focus:bg-[rgba(79,70,229,.2)] active:bg-[rgba(79,70,229,.25)]'>
                            <img src="../../../public/assets/images/Products.svg" alt="" />
                        </Link>
                        <ReactTooltip
                            id="my-tooltip-3"
                            place="right"
                            variant="info"
                            content="Products"
                        />
                        
                        

                        <Link onClick={hideActionTwo} data-tooltip-id="my-tooltip-4" className='flex h-11 w-11 items-center justify-center rounded-lg  text-primary outline-none transition-colors duration-200 hover:bg-[rgba(79,70,229,.2)] focus:bg-[rgba(79,70,229,.2)] active:bg-[rgba(79,70,229,.25)]'>
                            <img src="../../../public/assets/images/Category.svg" alt="" />
                        </Link>
                        <ReactTooltip
                            id="my-tooltip-4"
                            place="right"
                            variant="info"
                            content="Category"
                        />
                        <Link onClick={hideActionThree} data-tooltip-id="my-tooltip-5" className='flex h-11 w-11 items-center justify-center rounded-lg  text-primary outline-none transition-colors duration-200 hover:bg-[rgba(79,70,229,.2)] focus:bg-[rgba(79,70,229,.2)] active:bg-[rgba(79,70,229,.25)]'>
                            <img src="../../../public/assets/images/Users.svg" alt="" />
                        </Link>
                        <ReactTooltip
                            id="my-tooltip-5"
                            place="right"
                            variant="info"
                            content="Users"
                        />
                        <Link onClick={hideActionFour} data-tooltip-id="my-tooltip-6" className='flex h-11 w-11 items-center justify-center rounded-lg  text-primary outline-none transition-colors duration-200 hover:bg-[rgba(79,70,229,.2)] focus:bg-[rgba(79,70,229,.2)] active:bg-[rgba(79,70,229,.25)]'>
                            <img src="../../../public/assets/images/blogs.svg" alt="" />
                        </Link>
                        <ReactTooltip
                            id="my-tooltip-6"
                            place="right"
                            variant="info"
                            content="Blog"
                        />
                        
                    </div>

                    <div className="">
                        <div className="w-auto flex flex-col items-center space-y-3 py-3  bg-white"> 
                            <Link data-tooltip-id="my-tooltip-7" className='flex h-11 w-11 items-center justify-center rounded-lg  text-primary outline-none transition-colors duration-200 hover:bg-[rgba(79,70,229,.2)] focus:bg-[rgba(79,70,229,.2)] active:bg-[rgba(79,70,229,.25)]'>
                                <img src="../../../public/assets/images/setting.svg" alt="" />
                            </Link>
                            <ReactTooltip
                                id="my-tooltip-7"
                                place="right"
                                variant="info"
                                content="Settings"
                            />
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="">
            <div id='hide-id' className={`absolute top-[12.5rem] left-20 ${isToggledOne ? 'block' : 'hidden'}`}>
                <div className="text-[13px] text-[rgb(21,18,66)] flex flex-col border bg-white py-3 gap-3 rounded w-36 z-50">
                    <Link to='/dashboard/products' className='cursor-pointer px-2 py-1 hover:bg-[rgba(79,70,229,.25)] ease-in-out duration-300'>All Product</Link>
                    <Link to="/dashboard/newproduct" className='cursor-pointer px-2 py-1 hover:bg-[rgba(79,70,229,.25)] ease-in-out duration-300'>Add New Product</Link>
                </div>  
            </div>
            <div id='hide-id' className={`absolute top-[16rem]  left-20 ${isToggledTwo ? 'block' : 'hidden'}`}>
                <div className="text-[13px] text-[rgb(21,18,66)] flex flex-col border bg-white py-3 gap-3 rounded w-36 z-50">
                    <span className='cursor-pointer px-2 py-1 hover:bg-[rgba(79,70,229,.25)] ease-in-out duration-300'>All Category</span>
                    <span className='cursor-pointer px-2 py-1 hover:bg-[rgba(79,70,229,.25)] ease-in-out duration-300'>Add New Category</span>
                </div>
            </div>
            <div id='hide-id' className={`absolute top-[20rem]  left-20 ${isToggledThree ? 'block' : 'hidden'}`}>
                <div className="text-[13px] text-[rgb(21,18,66)] flex flex-col border bg-white py-3 gap-3 rounded w-32 z-50">
                    <Link to='/dashboard/users' className='cursor-pointer px-2 py-1 hover:bg-[rgba(79,70,229,.25)] ease-in-out duration-300'>All User</Link>
                    <Link to="/dashboard/newuser" className='cursor-pointer px-2 py-1 hover:bg-[rgba(79,70,229,.25)] ease-in-out duration-300'>Add New User</Link>
                </div>
            </div>
            <div id='hide-id' className={`absolute top-[24rem] left-20 ${isToggledFour ? 'block' : 'hidden'}`}>
                <div className="text-[13px] text-[rgb(21,18,66)] flex flex-col border bg-white py-3 gap-3 rounded w-32 z-50">
                    <span className='cursor-pointer px-2 py-1 hover:bg-[rgba(79,70,229,.25)] ease-in-out duration-300'>All Post</span>
                    <span className='cursor-pointer px-2 py-1 hover:bg-[rgba(79,70,229,.25)] ease-in-out duration-300'>Add New Post</span>
                </div>  
            </div>
        </div>
        </section>
        
    </>
  )
}

export default LeftSideVar