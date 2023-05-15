'use client'

import { useState } from "react";
import AddImage from "../addImage";
import MediaBox from "./media";
import ProductInformation from "./productInfo";
import SalesInformation from "./salesInformation";
import Shipping from "./shipping";
import TagSection from "./tagsection";
import { Product, Sales, Shipping as Ship } from "@/app/models/product";
import AddTag from "./addtag";
import SubmitButton from "./button";


const Layout = () => {
    
    const [selectedImages, setSelectedImages] = useState <Array<string>> ([])
    const [ProductInfo, setProductInfo] = useState <Product> ()
    const [shipping, setShipping] = useState <Ship> ()
    const [sales, setSales] = useState <Sales> ()

    const handleProductInfoCallback = (product: Product) => {
        setProductInfo(product);
    }
    const handleMediaCallback = ( images: Array<string> )=>{
        setSelectedImages(images);
    }
    const handleShippingCallback = (ship: Ship) =>{
        setShipping(ship)
    }
    const handleSalesInfoCallback = (sales: Sales) =>{
        setSales(sales);
    }


    return ( 
        <div>
        <div className="scroll-smooth mt-12 pr- h-50 grid grid-cols-3 gap-4 content-center  ">
            <div className="ps-8 mb-3 ml-5 text-gray-900 dark:text-black-950">
                <div className="font-semibold text-xl ml-6">Product Information</div>
                <ProductInformation callback={handleProductInfoCallback}/>
            </div>

            <div className="ps-8 mb-3 ml-9 text-gray-900 dark:text-black-950">
                <div className="font-semibold text-xl ">Sales Information</div>
                <SalesInformation callback={handleSalesInfoCallback}/>
            </div>

            <div className="ps-8 mb-3 text-gray-900 dark:text-gray-400">
                <div className="font-semibold text-xl ml-6">Shipping</div>
                <Shipping callback={handleShippingCallback}/>
            </div>
        </div>

        <div className="flex">
            <div className="mb-4 w-4/5 my-10 ml-36 h-[450px]">
                <div className="font-semibold text-xl ml-10 mt-4">Media Management</div>
                <MediaBox callback={handleMediaCallback}/> 
            </div>
        </div>

        <div>
            <div className="mb-4 w-4/5 my-10 ml-36 h-[450px]">
            <div className="font-semibold text-xl ml-10 mt-4">Tags 
                <div className="float-right"><AddTag/></div>
            </div>
            <TagSection/>
            
            </div>
        </div>

        <div>
            <div>
                <SubmitButton/>
            </div>
        </div>

        </div>
     );
}
 
export default Layout;