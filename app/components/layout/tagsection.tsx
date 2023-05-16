'use client'

import { useEffect, useState } from "react";
import MainTags from "./maintag";
import SubTags from "./subtag";
import { Tags } from "@/app/models/product";

const TagSection = ({callback}:{callback: (tag: Tags)=> void}) => {

    const [maintag, setMaintag] = useState <Array<string>> ([]);
    const [subtag, setSubtag] = useState <Array<string>> ([]);
    useEffect(() => {
        callback({maintag, subtag})
    }, [maintag, subtag]);
    return ( 
        <div className="ml-24 mt-7">
            <div>
                <div className="">Main Tags</div>
                <MainTags callback={setMaintag}/>
            </div>

            <div>
                <div className="mt-10">Sub Tags</div>
                
                
                {
                    maintag.length? <SubTags maintag={maintag} callback={setSubtag}/> : null
                }
                
            </div>
            

        </div>
     );
}
 
export default TagSection;