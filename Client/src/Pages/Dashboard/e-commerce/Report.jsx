import React from 'react'
import TotalVeiws from './All Card/TotalVeiws'
import TotalProfit from './All Card/TotalProfit'
import TotalProduct from './All Card/TotalProduct'
import TotalUser from './All Card/TotalUser'

const Report = () => {
  return (
    <>
      <section className='ml-[69px]'>
        <div className="w-[1140px] m-auto">
            <div className="flex flex-wrap items-center gap-6 mt-6">
              <TotalVeiws/>
              <TotalProfit/>
              <TotalProduct/>
              <TotalUser/>
            </div>
        </div>
      </section>
    </>
  )
}

export default Report