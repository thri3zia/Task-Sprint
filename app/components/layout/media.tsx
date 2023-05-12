'use client'

import AddImage from "../addImage"
import{FormEvent,useState} from 'react'

const MediaBox = () => {

    const [ uploading, setUploading] = useState(false)
    const [ selectedImage, setSelectedImage] = useState('')
    const [ selectedFile, setSelectedFile] =useState <File>()

    return ( 
        <div >

            <div className="h-32 ml-10 grid grid-cols-3 gap-4 content-center ">

                <div className="py-4 flex items-center justify-center w-48 text-sm ml-10 mt-10">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <input id="dropzone-file" type="file" className="hidden" />
                                {selectedImage ? (
                                    <img src="{selectedImage" alt=""/>
                                ) : (
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6" >
                                        <svg aria-hidden="true" className="w-8 h-6 text-gray-400 mt-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p className=" text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>    
                                    </div>
                                     
                                )
                                }
                       </div>
                        <span className="select-none mt-1"><h4 className="select-none">Cover Page</h4></span>
                    </label>
                </div>

                <div className="py-4 flex items-center justify-center w-48 text-sm ml-10 mt-10">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <input id="dropzone-file" type="file" className="hidden" />
                                {selectedImage ? (
                                    <img src="{selectedImage" alt=""/>
                                ) : (
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6" >
                                        <svg aria-hidden="true" className="w-8 h-6 text-gray-400 mt-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p className=" text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>    
                                    </div>
                                     
                                )
                                }
                       </div>
                        <span className="select-none mt-1"><h4 className="select-none">Image 1</h4></span>
                    </label>
                </div>

                <div className="py-4 flex items-center justify-center w-48 text-sm ml-10 mt-10">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <input id="dropzone-file" type="file" className="hidden" />
                                {selectedImage ? (
                                    <img src="{selectedImage" alt=""/>
                                ) : (
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6" >
                                        <svg aria-hidden="true" className="w-8 h-6 text-gray-400 mt-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p className=" text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>    
                                    </div>
                                     
                                )
                                }
                       </div>
                        <span className="select-none mt-1"><h4 className="select-none">Image 2</h4></span>
                    </label>
                </div>

            </div>

            <div className="mt-16">

            <div className="h-32 ml-10 grid grid-cols-3 gap-4 content-center ">
                <div className="py-4 flex items-center justify-center w-48 text-sm ml-10 mt-10">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <input id="dropzone-file" type="file" className="hidden" />
                                {selectedImage ? (
                                    <img src="{selectedImage" alt=""/>
                                ) : (
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6" >
                                        <svg aria-hidden="true" className="w-8 h-6 text-gray-400 mt-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p className=" text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>    
                                    </div>
                                     
                                )
                                }
                       </div>
                        <span className="select-none mt-1"><h4 className="select-none">Image 3</h4></span>
                    </label>
                </div>

                <div className="py-4 flex items-center justify-center w-48 text-sm ml-10 mt-10">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <input id="dropzone-file" type="file" className="hidden" />
                                {selectedImage ? (
                                    <img src="{selectedImage" alt=""/>
                                ) : (
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6" >
                                        <svg aria-hidden="true" className="w-8 h-6 text-gray-400 mt-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p className=" text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>    
                                    </div>
                                     
                                )
                                }
                       </div>
                        <span className="select-none mt-1"><h4 className="select-none">Image 4</h4></span>
                    </label>
                </div>

                <div className="py-4 flex items-center justify-center w-48 text-sm ml-10 mt-10">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <input id="dropzone-file" type="file" className="hidden" />
                                {selectedImage ? (
                                    <img src="{selectedImage" alt=""/>
                                ) : (
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6" >
                                        <svg aria-hidden="true" className="w-8 h-6 text-gray-400 mt-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p className=" text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>    
                                    </div>
                                     
                                )
                                }
                       </div>
                        <span className="select-none mt-1"><h4 className="select-none">Image 5</h4></span>
                    </label>
                </div>
            </div>
            </div>

            

            

            






            {/* <div className="hidden md:block pt-10" >
                <AddImage/>
            </div> */}
        </div>

     );
}
 
export default MediaBox;