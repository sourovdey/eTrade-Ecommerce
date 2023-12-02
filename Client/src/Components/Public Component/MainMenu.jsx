import React from 'react'
import { CiSearch} from 'react-icons/ci';
import { PiHeartThin} from 'react-icons/Pi';
import { PiShoppingCartSimpleLight} from 'react-icons/Pi';
import { GoPerson} from 'react-icons/go';
import { RiArrowDownSLine} from 'react-icons/Ri';
import { Link } from 'react-router-dom';


const MainMenu = () => {
  return (
    <>
      <section className='bg-[#F9F3F0] pt-2'>
        <div className='w-[1140px] m-auto'>
          <div className="px-[40px] py-[20px] bg-white rounded-[10px] mx-[18px]">
            <div className=" font-DMSans flex flex-wrap justify-between items-center">
              <div className=""><img src="../../../public/assets/images/logo.png" alt="logo" /></div>
              <div className="">
                <ul className='flex flex-wrap text-[15px] font-bold text-[#292930]'>
                  <li className='px-6 hover:text-[#000] ease-in-out duration-300'><Link to="/">Home</Link></li>
                  <li className='px-6 hover:text-[#000] ease-in-out duration-300'><Link to="/shop">Shop</Link></li>
                  <li className='px-6 hover:text-[#000] ease-in-out duration-300'><Link to="" className='flex'>Categorize <span className='text-[#c6c6c6] font-normal pt-[2px]'><RiArrowDownSLine fontSize={20}/></span></Link></li>
                  <li className='px-6 hover:text-[#000] ease-in-out duration-300'><Link to="/about">About</Link></li>
                  <li className='px-6 hover:text-[#000] ease-in-out duration-300'><Link to="/blog">Blog</Link></li>
                  <li className='px-6 hover:text-[#000] ease-in-out duration-300'><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              <div className="">
                <ul className='flex flex-wrap'>
                  <li className='p-2.5 hover:bg-[#ff497c] hover:text-[white] ease-in-out duration-300 w-[45px] rounded-full'><a href="" className=''><CiSearch fontSize={24} fontWeight={500}/></a></li>
                  <li className='p-2.5 hover:bg-[#ff497c] hover:text-[white] ease-in-out duration-300 w-[45px] rounded-full'><a href=""><PiHeartThin fontSize={24} fontWeight={500}/></a></li>
                  <li className='p-2.5 hover:bg-[#ff497c] hover:text-[white] ease-in-out duration-300 w-[45px] rounded-full'><a href=""><PiShoppingCartSimpleLight fontSize={24} fontWeight={300}/></a></li>
                  <li className='p-2.5 hover:bg-[#ff497c] hover:text-[white] ease-in-out duration-300 w-[45px] rounded-full'><a href=""><GoPerson fontSize={24}/></a></li>
                </ul>
              </div>
              
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainMenu