'use client'

import AddImage from "../addImage"
import{FormEvent,useEffect,useState} from 'react'

const MediaBox = (
    {callback}: {callback: (images: Array<string>)=>void}
    ) => {

    const [ uploading, setUploading] = useState(false)
    const [ selectedImage, setSelectedImage] = useState<Array<string>>([])
    const [ selectedFile, setSelectedFile] =useState <File>()

    const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        const files = event.target?.files as FileList;
        const fileref = files[0];
        if(fileref){
            try {
                const fileType: string = fileref.type||"";
                const reader = new FileReader();
                reader.readAsBinaryString(fileref)
                reader.onload = (e: any)=>{
                    setSelectedImage([`data:${fileType};base64,${btoa(e.target.result)}` , ... selectedImage ])
                }
            } catch (error) {
                console.log("Wrong File Format.");
            }
        }

    }

    useEffect(() => {
        callback(selectedImage)
    },[selectedImage])

  
    return ( 
        <div className="pt-10">
          <div className="grid grid-cols-7 gap-3 h-fit">

                    <label htmlFor="dropzone-file" className="flex items-center justify-center w-full aspect-video border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-2 pb-2 w-40 h-40">
                        <input id="dropzone-file" type="file" className="hidden" onChange={(e) => handleOnchange(e)} />
                            <div className="flex flex-col items-center justify-center pb-6" >
                                <svg aria-hidden="true" className="w-8 h-6 text-gray-400 mt-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p className=" text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>    
                            </div>
                       </div>
                    </label>

                    {selectedImage.length? selectedImage.map((e, index) =>(

                        <div className="flex items-center justify-center w-150 aspect-video border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-2 pb-2">
                                <input type="image" key={index} src={e} alt="" width={130} height={140}/> 
                            </div>

                            <div>

                            
                            </div>      
                        </div>

                        
                    )): null
                    }          
            </div>
        </div>
     );
}
 
export default MediaBox;