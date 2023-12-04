import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="p-4 bg-white md:p-8 lg:p-10">
            <div className="mx-auto max-w-screen-xl text-center">
                <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900">   
                    <img src="../../../public/assets/images/logo.png" alt="logo" />  
                </a>
                <p className="my-6 text-gray-500 ">Shop with confidence for quality products, secure payments, and fast delivery.</p>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 ">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Premium</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Campaigns</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Affiliate Program</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                    </li>
                </ul>
                <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="#" class="hover:underline">eTrade™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    </>
  )
}

export default Footer