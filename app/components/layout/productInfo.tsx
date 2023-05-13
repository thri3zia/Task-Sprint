'use client'

import { Product } from '@/app/models/product'
import{FormEvent,useEffect,useState} from 'react'



export const ProductInformation = ({callback}: {callback: (product: Product)=>void}) => {

    const [ name, setName] = useState('')
    const [ category, setCategory] = useState('')
    const [ subcategory, setSubCategory] = useState('')
    const [ description, setDescription] = useState('')
    const [ quantity, setQuantity] = useState('')


    const handleOnKeyUp = (event: React.KeyboardEvent<HTMLInputElement>, id:string) =>{
        const text = (event.target as HTMLInputElement).value;
        if (!Number(text)){
            (document.getElementById(id) as HTMLInputElement).value = text.slice(0, -1);    
        }
        else{
            switch (id) {
                case "quantity":
                    setQuantity(text)
                    break;
            
                default:
                    break;
            }
        }
    }

    const handleOnchange = (event: React.ChangeEvent<HTMLSelectElement>, type:string) => {
        const value = event.target.value;

        if(value !== "default"){
            switch (type) {
                case "category":
                    setCategory(value);
                    break;
            
                case "subcategory":
                    setSubCategory(value);
                    break;
            
                default:
                    break;
            }
        }
    }

    useEffect(() => {
        callback({name, category, subcategory, description, quantity});
    }, [name, category, subcategory, description, quantity]);

    return ( 
        <form>
            <div>

                <div className="relative mt-5">
                    <input type="text" id="name" onKeyUp={(e) => setName((e.target as HTMLInputElement).value)} className="block px-2.5 pb-1.5 pt-4 w-80 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="name" className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Product Name</label>
                </div>

                <div className="relative mt-5" >
                    <select id='category' onChange={(e) => handleOnchange(e, 'category')} className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <option value={"default"} selected>Product Category</option>
                        <option value="amparito">Amparito</option>
                        <option value="fine jewelry ">Fine Jewelry</option>
                    </select>
                </div>

                <div className="relative mt-5" >
                    <select id='subcategory' onChange={(e) => handleOnchange(e, 'subcategory')} className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <option value={"default"} selected>Sub Category</option>
                        <option value="ring">Rings</option>
                        <option value="necklace">Necklaces</option>
                        <option value="bracelets">Bracelets</option>
                        <option value="watch">Watch</option>
                    </select>
                </div>

                <div className="relative mt-5">
                    <textarea id="description"onKeyUp={(e) => setDescription((e.target as HTMLInputElement).value)} className="block px-2.5 pb-1.5 pt-4 w-80 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={description} onChange={(e) => setDescription(e. target.value)}></textarea>
                    <label htmlFor="description" className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Product Description</label>
                </div>

                <div className="relative mt-5">
                    <input type="text" onKeyUp={(e) => handleOnKeyUp(e, "quantity")} id="quantity" className="block px-2.5 pb-1.5 pt-4 w-80 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="quantity" className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Available Quantity</label>
                </div>

            </div>
        </form>
     );
}
 
export default ProductInformation;