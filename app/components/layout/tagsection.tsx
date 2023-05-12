'use client'

import MainTags from "./maintag";
import SubTags from "./subtag";

const TagSection = () => {
    return ( 
        <div className="ml-24 mt-12">
            <div>
            
                <div className="">Main Tags</div>
                <MainTags/>

            </div>

            <div>
                <div className="mt-10">Sub Tags</div>
                <SubTags/>
            </div>
            

        </div>
     );
}
 
export default TagSection;