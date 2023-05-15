'use client'

import { useEffect, useState } from "react";
import MainTags from "./maintag";
import SubTags from "./subtag";
import { Tags } from "@/app/models/product";

const TagSection = ({callback}:{callback: (tag: Tags)=> void}) => {

    const [maintag, setMaintag] = useState <string> ("");
    const [subtag, setSubtag] = useState <string> ("")
    useEffect(() => {
        callback({maintag, subtag})
    }, [maintag, subtag]);
    return ( 
        <div className="ml-24 mt-12">
            <div>
                <div className="">Main Tags</div>
                <MainTags callback={setMaintag}/>
            </div>

            <div>
                <div className="mt-10">Sub Tags</div>
                <SubTags callback={setSubtag}/>
            </div>
            

        </div>
     );
}
 
export default TagSection;