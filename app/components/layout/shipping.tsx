'use client'

import { Shipping } from '@/app/models/product'
import{useEffect,useState} from 'react'

const Shipping = ({callback}:{callback: (ship: Shipping) => void}) => {

    const [ width, setWidth] = useState <number> (0)
    const [ length, setLength] = useState <number> (0)
    const [ weight, setWeight] = useState <number> (0)
    const [ packagetype, setPackagingType] = useState <string> ('')
    const [ courier, setAvailableCourier] = useState <string> ('')

    const handleOnKeyUp = (event: React.KeyboardEvent<HTMLInputElement>, id:string) =>{
        const text = (event.target as HTMLInputElement).value;
        if (!Number(text)){
            (document.getElementById(id) as HTMLInputElement).value = text.slice(0, -1);    
        }
        else{
            switch (id) {
                case "width":
                    setWidth(parseFloat(text))
                    break;
                case "length":
                    setLength(parseFloat(text))
                    break;
                case "weight":
                    setWeight(parseFloat(text))
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
                case "packaging":
                    setPackagingType(value);
                    break;
            
                case "courier":
                    setAvailableCourier(value);
                    break;
            
                default:
                    break;
            }
        }
    }

    useEffect(() => {
        callback({width, length, weight, packagetype, courier})
        
    }, [width, length, weight, packagetype, courier, callback]);

    return ( 
    <form>
        <div className="m-6">

            <div className="relative mt-5 flex flex-wrap items-stretch">
                <input
                    id="width"
                    type="text"
                    className="block px-2.5 pb-1.5 pt-4 w-[270px] text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    aria-describedby="basic-addon2"
                    onKeyUp={(e)=>handleOnKeyUp(e, "width")} />
                <label htmlFor="width" className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Width</label>

                <span
                    className="flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    id="basic-addon2">cm</span>
            </div>

            <div className="relative mt-5 flex flex-wrap items-stretch">
                <input
                    id="length"
                    type="text"
                    className="block px-2.5 pb-1.5 pt-4 w-[270px] text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    aria-describedby="basic-addon2" 
                    onKeyUp={(e)=>handleOnKeyUp(e, "length")}/>
                <label htmlFor="length" className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Length</label>

                <span
                    className="flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    id="basic-addon2">cm</span>
            </div>


            <div className="relative mt-5 flex flex-wrap items-stretch">
                <input
                    id="weight"
                    type="text"
                    className="block px-2.5 pb-1.5 pt-4 w-[270px] text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    aria-describedby="basic-addon2" 
                    onKeyUp={(e)=>handleOnKeyUp(e, "weight")}/>
                <label htmlFor="weight" className="absolute pt-30 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Weight</label>

                <span
                    className="flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    id="basic-addon2">kg.</span>
            </div>

            <div className="relative mt-5" >
                    <select onChange={(e) => handleOnchange(e, "packaging")} className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <option  defaultValue={"default"}>Packaging Type</option>
                        <option value="pouch">Pouch</option>
                        <option value="box">Box</option>
                    </select>
            </div>

            <div className="relative mt-5" >
                    <select  onChange={(e) => handleOnchange(e, "courier")} className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <option defaultValue={"default"}>Available Courier</option>
                        <option value="pouch">Pouch</option>
                        <option value="box">Box</option>
                    </select>
            </div>

            

        </div>
    </form>
     );
}
 
export default Shipping;