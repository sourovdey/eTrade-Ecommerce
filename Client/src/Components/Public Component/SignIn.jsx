import React from 'react'
// import goole from "../../../public/assets/images/google.png"

const SignIn = () => {
  return (
    <>
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="">
                            <h1 className="text-2xl text-center font-bold tracking-tight text-gray-900 md:text-3xl">
                            Welcome Back
                            </h1>
                            <p className="text-[#667886] mt-[10px] text-center text-[12px]">Glad to See you again 👋<br /> Login to your account below</p>
                            <button type="submit" className="flex flex-wrap items-center justify-center gap-4 w-full text-black border-2 border-[#EDEFF1] bg-white hover:bg-slate-50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-[20px]"> <img className='w-[15px]' src="../../../public/assets/images/google.png" alt="google icon" />Continue with Google</button>
                        </div>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5" placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5  " required=""/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:outline-none " required=""/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="remember" className="text-gray-500 cursor-pointer">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-[#2563EB] hover:underline">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-[#2563EB] hover:bg-[#1d4ed8] focus:ring-4 focus:outline-none focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                            <p className="text-sm font-light text-gray-500 ">
                                Don’t have an account yet? <a href="#" className="font-medium text-[#2563EB] hover:underline">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SignIn