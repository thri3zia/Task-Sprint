'use client'

import { main, tags } from "@/app/data/tags";
import { useEffect, useState } from "react";

const MainTags = ({callback}:{callback: (maintag: Array<string>) => void}) => {
const [selectedtag, setSelectedtag] = useState <Array<string>> ([]);

const handleOnclick = (x:string) => {
    if(selectedtag?.includes(x)){
        setSelectedtag(selectedtag.filter(item => item !== x))
    }else{
        setSelectedtag([...selectedtag, x])
    }
}

useEffect(() => {
    callback(selectedtag)
}, [selectedtag]);


    return ( 
        <div className="ml-36 border-2 w-3/4 ">
            <div className="relative mt-5 ml-6 mb-5 ">

                {tags.map((x, index)=>(
                    <button type="button"
                    key={index}
                    onClick={()=> handleOnclick(x.main)} 
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        {x.main}
                    </button>
                ))
                }
            </div>
        </div>
     );
}
 
export default MainTags;