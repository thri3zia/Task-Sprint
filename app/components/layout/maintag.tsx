'use client'

import { main } from "@/app/data/tags";
import { useEffect, useState } from "react";

const MainTags = ({callback}:{callback: (maintag: string) => void}) => {
const [selectedtag, setSelectedtag] = useState <string> ("");

useEffect(() => {
    callback(selectedtag)
}, [selectedtag]);
    return ( 
        <div className="ml-36 border-2 w-3/4 ">
            <div className="relative mt-5 ml-6 mb-5 ">

                {main.map((x)=>(
                    <button type="button"
                    onClick={()=> setSelectedtag(x)} 
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        {x}
                    </button>
                ))
                }
            </div>
        </div>
     );
}
 
export default MainTags;