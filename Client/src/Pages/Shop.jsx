import {React,useState,useEffect} from 'react'
import Campain from '../Components/Public Component/Campain'
import ShopTopMenu from '../Components/Pages Component/Shop/ShopTopMenu'
import ShopMainMenu from '../Components/Pages Component/Shop/ShopMainMenu'
import AllProduct from '../Components/Pages Component/Shop/AllProduct'
import { getProduct } from '../helper/helper'
import Footer from '../Components/Public Component/Footer'

const Shop = () => {
    let [product, setProduct] = useState([]);
    const dataShowHandler = async () => {
        let showDB = await getProduct();
        setProduct(showDB.products);
    };

    useEffect(() => {
     dataShowHandler()
    }, []);

  return (
    <>
      <ShopTopMenu/>
      <ShopMainMenu/>
      <Campain/>
      <section>
            {/* container */}
            <div className='w-[1140px] m-auto'>
                <div className="flex flex-wrap justify-between">
                    {/* Card */}
                    {
                      product.map((pd) => <AllProduct data= {pd}/>)
                    }                    
                </div>
            </div>
      </section>
      <Footer/>             
    </>
  )
}

export default Shop
