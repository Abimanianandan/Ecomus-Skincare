import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Carousel from '../components/carousel/Carousel'
import Topbar from '../components/topbar/Topbar'
import Banner from '../components/banner/Banner'
import Secondbar from '../components/secondbar/Secondbar'
import ExclusiveProduct from '../components/exclusive-products/ExclusiveProduct'
import Review from '../components/review/Review'
import FasionItems from '../components/fasion-items/FasionItems'
import Footer from '../components/footer/Footer'
import ProductBenifit from '../components/product-benifit/ProductBenifit'
import Purchase from '../components/purchase/Purchase'

const HomePage = () => {
  return (
    <>
     <Navbar />
     <Carousel />
     <Topbar/>
     <Banner />
     <Secondbar />
     <ExclusiveProduct />
     <Review />
     <ProductBenifit />
     <Purchase />
     <FasionItems />
     <Footer />
    </>
  )
}

export default HomePage