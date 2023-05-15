'use client'

import { useMemo, useState } from "react";
import AddImage from "../addImage";
import MediaBox from "./media";
import ProductInformation from "./productInfo";
import SalesInformation from "./salesInformation";
import Shipping from "./shipping";
import TagSection from "./tagsection";
import { Product, Sales, Shipping as Ship, Tags } from "@/app/models/product";
import AddTag from "./addtag";
import SubmitButton from "./button";


const Layout = () => {
    
    const [selectedImages, setSelectedImages] = useState <Array<string>> ([])
    const [productInfo, setProductInfo] = useState <Product> ()
    const [shipping, setShipping] = useState <Ship> ()
    const [sales, setSales] = useState <Sales> ()
    const [tags, setTags] = useState <Tags> ()

    const returnButton = useMemo(() => {
        if (selectedImages && productInfo && shipping && sales && tags){
            return (
                <SubmitButton 
                selectedImages={selectedImages}
                productInfo={productInfo}
                sales={sales}
                shipping={shipping}
                tags={tags}
                />
            )        
        }

        return (
            <div className="flex justify-end">
                <button disabled type="button" className="mr-36 w-48 mb-8  text-black-700 opacity-75 hover:text-white border border-red-700 hover:bg-red-950 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-3 py-3 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Submit And Publish</button>
            </div>
            )
        
    }, [selectedImages, productInfo, shipping, sales,tags])

    
        
    

    return ( 
        <div>
        <div className="scroll-smooth mt-12 pr- h-50 grid grid-cols-3 gap-4 content-center  ">
            <div className="ps-8 mb-3 ml-5 text-gray-900 dark:text-black-950">
                <div className="font-semibold text-xl ml-6">Product Information</div>
                <ProductInformation callback={setProductInfo}/>
            </div>

            <div className="ps-8 mb-3 ml-5 text-gray-500 dark:text-gray-400">
                <div className="font-semibold text-xl">Sales Information</div>
                <SalesInformation callback={setSales}/>
            </div>

            <div className="ps-8 mb-3 text-gray-900 dark:text-gray-400">
                <div className="font-semibold text-xl ml-6">Shipping</div>
                <Shipping callback={setShipping}/>
            </div>
        </div>

        <div className="flex">
            <div className="mb-4 w-4/5 my-10 ml-36 h-[450px]">
                <div className="font-semibold text-xl ml-10 mt-4">Media Management</div>
                <MediaBox callback={setSelectedImages}/> 
            </div>
        </div>

        <div>
            <div className="mb-4 w-4/5 my-10 ml-36 h-[450px]">
            <div className="font-semibold text-xl ml-10 mt-4">Tags 
                <div className="float-right"><AddTag/></div>
            </div>-
            <TagSection callback={setTags}/>
            
            </div>
        </div>

        <div>
            <div>
                {returnButton}
            </div>
        </div>

        </div>
     );
}
 
export default Layout;