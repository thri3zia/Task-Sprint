'use client'

import{FormEvent,useState} from 'react'



export const ProductInformation = () => {

    const [ name, setName] = useState('')
    const [ category, setCategory] = useState('')
    const [ subcategory, setSubCategory] = useState('')
    const [ description, setDescription] = useState('')
    const [ quantity, setQuantity] = useState('')

    return ( 
        <form>
            <div>

                <div className="relative mt-5">
                    <input type="text" id="name" className="block px-2.5 pb-1.5 pt-4 w-80 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={name} onChange={(e) => setName(e. target.value)}/>
                    <label htmlFor="name" className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Product Name</label>
                </div>

                <div className="relative mt-5" >
                    <select className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={category} onChange={(e) => setCategory(e. target.value)}>
                        <option selected>Product Category</option>
                        <option value="ampario">Ampario</option>
                        <option value="fine">Fine Jewelry</option>
                    </select>
                </div>

                <div className="relative mt-5" >
                    <select className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={subcategory} onChange={(e) => setSubCategory(e. target.value)}>
                        <option selected>Sub Category</option>
                        <option value="ring">Rings</option>
                        <option value="necklace">Necklaces</option>
                        <option value="bracelets">Bracelets</option>
                        <option value="watch">Watch</option>
                    </select>
                </div>

                <div className="relative mt-5">
                    <textarea id="description" className="block px-2.5 pb-1.5 pt-4 w-80 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={description} onChange={(e) => setDescription(e. target.value)}></textarea>
                    <label htmlFor="description" className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Product Description</label>
                </div>

                <div className="relative mt-5">
                    <input type="number" id="quantity" className="block px-2.5 pb-1.5 pt-4 w-80 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={quantity} onChange={(e) => setQuantity(e. target.value)}/>
                    <label htmlFor="quantity" className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Available Quantity</label>
                </div>

            </div>
        </form>
     );
}
 
export default ProductInformation;