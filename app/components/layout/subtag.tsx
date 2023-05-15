'use client'

import { main, sub, tags } from "@/app/data/tags";
import { useEffect, useState } from "react";

const SubTags = ({maintag, callback}:{
    maintag: Array<string>,
    callback: (subtag: Array<string>) => void}) => {
    const [selectedtag, setSelectedtag] = useState <string[]> ([]);

    const handleOnclick = (y:string) => {
        if(selectedtag?.includes(y)){
            setSelectedtag(selectedtag.filter(item => item !== y))
        }else{
            setSelectedtag([...selectedtag, y])
        }
    }
    
    useEffect(() => {
        callback(selectedtag)
    }, [callback, selectedtag]);
    
    return ( 
        <div className="ml-36 border-2 w-3/4 ">
        {tags.map((x, index) => {
            if (maintag?.includes(x.main)) {
            return (
                <div className="relative mt-5 ml-6 mb-5" key={index}>
                <label htmlFor="main">{x.main}:</label> <br />
                {x.subtags.map((y, subIndex) => (
                    <button
                    type="button"
                    key={subIndex}
                    onClick={() => handleOnclick(y)}
                    className={`${selectedtag?.includes(y) ? 'fade-in' : ''} py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}
                    >
                    {y}
                    </button>
                ))}
                </div>
            );
            } else {
            return null;
            }
        })}
</div>

     );
}
 
export default SubTags;