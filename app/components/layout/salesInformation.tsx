'use client'
import{FormEvent,useState} from 'react'

const SalesInformation = () => {

    const [ barcode, setBarcode ] = useState('')
    const [ cos, setCostOfSales ] = useState('')
    const [ gprice, setGrossPrice ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ date, setDate ] = useState('')

    return ( 
        <form>
        <div>

            <div className="relative mt-5">
                <input type="number" id="barcode" value={barcode} onChange={(e) => setBarcode(e. target.value)} className="block px-2.5 pb-1.5 pt-4 w-80 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                <label htmlFor="barcode"  className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">ALL Barcode</label>
            </div>

            <div className="relative mt-5">
                <input type="number" id="sales" value={cos} onChange={(e) => setCostOfSales(e. target.value)} className="block px-2.5 pb-1.5 pt-4 w-80 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                <label htmlFor="sales" className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Costs of Sales</label>
            </div>

            <div className="relative mt-5">
                <input type="number" id="gprice" value={gprice} onChange={(e) => setGrossPrice(e. target.value)} className="block px-2.5 pb-1.5 pt-4 w-80 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                <label htmlFor="gprice" className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Gross Price</label>
            </div>

            <div className="relative mt-5">
                <input type="number" id="price" value={price} onChange={(e) => setPrice(e. target.value)} className="block px-2.5 pb-1.5 pt-4 w-80 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                <label htmlFor="price" className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Price</label>
            </div>

            <div className="relative mt-5">
                <input type="datetime-local" id="date" value={date} onChange={(e) => setDate(e. target.value)} className="block px-2.5 pb-1.5 pt-4 w-80 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="date" className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Date and Time</label>
            </div>

        </div>
    </form>
     );
}
 
export default SalesInformation;