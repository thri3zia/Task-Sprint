'use client'
import { Sales } from '@/app/models/product'
import{ useEffect, useState } from 'react'



const SalesInformation = ({callback}:{callback: (sales: Sales)=>void}) => {

    const [ barcode, setBarcode ] = useState <string>('')
    const [ sales, setSales ] = useState <number>(0)
    const [ gprice, setGprice ] = useState <number>(0)
    const [ price, setPrice ] = useState <number>(0)
    const [ datetime, setDatetime ] = useState <string>('')

    const handleOnKeyUp = (event: React.KeyboardEvent<HTMLInputElement>, id:string) =>{
        const text = (event.target as HTMLInputElement).value;
        if (!Number(text)){
            (document.getElementById(id) as HTMLInputElement).value = text.slice(0, -1);
            
        }
        else{
            switch (id) {
                case "sales":
                    setSales(parseFloat(text));
                    break;
                case "gprice":
                    setGprice(parseFloat(text));
                    break;
                case "price":
                    setPrice(parseFloat(text));
                    break;
            
                default:
                    break;
            }
        }
    }

    useEffect(() => {
      callback({barcode, sales, gprice, price, datetime})
    }, [barcode, sales, gprice, price, datetime])
    


    return ( 
        <form>
        <div>

            <div className="relative mt-5">
                <input type="text" id="barcode" onChange={(e) => setBarcode(e. target.value)} className="block px-2.5 pb-1.5 pt-4 w-80 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                <label htmlFor="barcode"  className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">ALL Barcode</label>
            </div>

            <div className="relative mt-5">
                <input type="text" id="sales" onKeyUp={(e) => {handleOnKeyUp(e, "sales")}} className="block px-2.5 pb-1.5 pt-4 w-80 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                <label htmlFor="sales" className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Costs of Sales</label>
            </div>

            <div className="relative mt-5">
                <input type="text" id="gprice" onKeyUp={(e) => {handleOnKeyUp(e, "gprice")}} className="block px-2.5 pb-1.5 pt-4 w-80 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                <label htmlFor="gprice" className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Gross Price</label>
            </div>

            <div className="relative mt-5">
                <input type="text" id="price" onKeyUp={(e) => {handleOnKeyUp(e, "price")}} className="block px-2.5 pb-1.5 pt-4 w-80 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                <label htmlFor="price" className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Price</label>
            </div>

            <div className="relative mt-5">
                <input type="datetime-local" id="date" onChange={(e) => setDatetime(e. target.value)} className="block px-2.5 pb-1.5 pt-4 w-80 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="date" className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Date and Time</label>
            </div>

        </div>
    </form>
     );
}
 
export default SalesInformation;