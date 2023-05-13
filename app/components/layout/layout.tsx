'use client'

import { useState } from "react";
import AddImage from "../addImage";
import AddTag from "./addtag";
import SubmitButton from "./button";
import MediaBox from "./media";
import ProductInformation from "./productInfo";
import SalesInformation from "./salesInformation";
import Shipping from "./shipping";
import TagSection from "./tagsection";
import { Product, Sales } from "@/app/models/product";


const Layout = () => {
    
    const [selectedImages, setSelectedImages] = useState <Array<string>> ([])
    const [ProductInfo, setProductInfo] = useState <Product>()
    const [shipping, setShipping] = useState()
    const [sales, setSales] = useState <Sales>()

    const handleProductInfoCallback = (product: Product) => {
        setProductInfo(product);
    }
    const handleMediaCallback = ( images: Array<string> )=>{
        setSelectedImages(images);
    }
    const handleShippingCallback = () =>{
        
    }
    const handleSalesInfoCallback = (sales: Sales) =>{
        setSales(sales);
    }
    



    return ( 
        <div>
        <div className="scroll-smooth mt-12 pr- h-50 grid grid-cols-3 gap-4 content-center  ">
<<<<<<< HEAD
            <div className="ps-8 mb-3 ml-5 text-gray-500 dark:text-gray-400">
                <div className="font-semibold text-xl">Product Information</div>
                <ProductInformation callback={handleProductInfoCallback}/>
=======
            <div className="ps-8 mb-3 ml-5 text-gray-900 dark:text-black-950">
                <div className="font-semibold text-xl ml-6">Product Information</div>
                <ProductInformation/>
>>>>>>> b57bbf25aadfc7000cb787c5eba2e2e488abbc29
            </div>

            <div className="ps-8 mb-3 ml-9 text-gray-900 dark:text-gray-400">
                <div className="font-semibold text-xl">Sales Information</div>
                <SalesInformation callback={handleSalesInfoCallback}/>
            </div>

            <div className="ps-8 mb-3 text-gray-900 dark:text-gray-400">
                <div className="font-semibold text-xl ml-6">Shipping</div>
                <Shipping/>
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
            <SubmitButton/>
        </div>

        </div>
     );
}
 
export default Layout;