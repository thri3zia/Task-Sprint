'use client'

import { Product, Sales, Shipping, Tags } from "@/app/models/product";

const SubmitButton = (
    {selectedImages, productInfo, shipping, sales,tags}:
    {selectedImages: Array<string>, productInfo: Product, shipping: Shipping, sales: Sales,tags: Tags}) => {
    
    const handleOnclick = () => {
        console.log({selectedImages, productInfo, shipping, sales,tags})
    }

    return ( 
        <div className="flex justify-end">
            <button onClick={handleOnclick} type="button" className="mr-36 w-48 mb-8  text-black-700 opacity-75 hover:text-white border border-red-700 hover:bg-red-950 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-3 py-3 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Submit And Publish</button>
        </div>
     );
}


 
export default SubmitButton;

