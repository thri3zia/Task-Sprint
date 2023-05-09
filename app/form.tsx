'use client'
import { NextPage } from "next";
import{FormEvent,useState} from 'react'


interface IProductInfo{
    name:string;
    category:string;
    subcategory:string;
    email:any;
    description:string

}
interface Props{}

export const ProductInfo: NextPage<Props> = () => {

    const [ name, setName] = useState('')
    const [ category, setCategory] = useState('')
    const [ subcategory, setSubCategory] = useState('')
    const [ email, setEmail] = useState('')
    const [ description, setDescription] = useState('')
    const [ quantity, setQuantity] = useState('')
    const [ uploading, setUploading] = useState(false)
    const [ selectedImage, setSelectedImage] = useState('')
    const [ selectedFile, setSelectedFile] =useState <File>()
    const [ barcode, setBarcode] = useState('')
    const [ cos, setCostOfSales] = useState('')
    const [ gprice, setGrossPrice] = useState('')
    const [ price, setPrice] = useState('')
    const [ width, setWidth] = useState('')
    const [ length, setLength] = useState('')
    const [ weight, setWeight] = useState('')
    const [ packagetype, setPackagingType] = useState('')
    const [ courier, setAvailableCourier] = useState('')




    const onSubmit = (e:FormEvent) => {
        e.preventDefault()
        console.log('Data:',name,email,description)
    }

      

    return (

        <form id='formContainer' onSubmit={onSubmit}>

            <div className='productsDescription'>

                <div className='titles'>
                    <h2>PRODUCT INFORMATION</h2>
                </div>

            <label>Product Name </label>
            <input type='text' required className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" value={name} onChange={(e) => setName(e. target.value)}/>

            <br/>
            <label>Product Category </label>
            <input type='text' required className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" value={category} onChange={(e) => setCategory(e. target.value)}/>

            <br/>
            <label>Sub Category </label>
            <input type='text'required className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" value={subcategory} onChange={(e) => setSubCategory(e. target.value)}/>

            <br/>
            <label>Email Address </label>
            <input type='email' required className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" value={email} onChange={(e) => setEmail(e. target.value)}/>

            <br/>
            <label>Product Description </label>
            <textarea required className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" value={description} onChange={(e) => setDescription(e. target.value)}></textarea>

            <br/>
            <label>Available Quantity </label>
            <input type='number' required className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" value={quantity} onChange={(e) => setQuantity(e. target.value)}/>
            
            </div>
{/* ------------------------------------------------------------------------------------------------------------------------- */}
            <div className="imageGallery">
                <div className='titles'>
                    <h2>MEDIA MANAGEMENT</h2>
                </div>
                <div className='displayMedia'>

                        <label>
                            <input type="file" hidden />
                            <div className="imgBox">
                                {selectedImage ? (
                                    <img src="{selectedImage" alt=""/>
                                ) : (
                                    <span><h6 className="label">Select Image</h6></span>
                                )
                                }
                            </div>
                        </label>
                        <label>
                            <input type="file" hidden />
                            <div className="imgBox">
                                {selectedImage ? (
                                    <img src="{selectedImage" alt=""/>
                                ) : (
                                    <span><h6 className="label">Select Image</h6></span>
                                )
                                }
                            </div>
                        </label>
                        <label>
                            <input type="file" hidden />
                            <div className="imgBox">
                                {selectedImage ? (
                                    <img src="{selectedImage" alt=""/>
                                ) : (
                                    <span><h6 className="label">Select Image</h6></span>
                                )
                                }
                            </div>
                        </label>
                        <label>
                            <input type="file" hidden />
                            <div className="imgBox">
                                {selectedImage ? (
                                    <img src="{selectedImage" alt=""/>
                                ) : (
                                    <span><h6 className="label">Select Image</h6></span>
                                )
                                }
                            </div>
                        </label>
                        <label>
                            <input type="file" hidden />
                            <div className="imgBox">
                                {selectedImage ? (
                                    <img src="{selectedImage" alt=""/>
                                ) : (
                                    <span><h6 className="label">Select Image</h6></span>
                                )
                                }
                            </div>
                        </label>
                        <label>
                            <input type="file" hidden />
                            <div className="imgBox">
                                {selectedImage ? (
                                    <img src="{selectedImage" alt=""/>
                                ) : (
                                    <span><h6 className="label">Select Image</h6></span>
                                )
                                }
                            </div>
                        </label>
                        <label>
                            <input type="file" hidden />
                            <div className="imgBox">
                                {selectedImage ? (
                                    <img src="{selectedImage" alt=""/>
                                ) : (
                                    <span><h6 className="label">Select Image</h6></span>
                                )
                                }
                            </div>
                        </label>
                        <label>
                            <input type="file" hidden />
                            <div className="imgBox">
                                {selectedImage ? (
                                    <img src="{selectedImage" alt=""/>
                                ) : (
                                    <span><h6 className="label">Select Image</h6></span>
                                )
                                }
                            </div>
                        </label>
                    </div>
                </div>
{/* ------------------------------------------------------------------------------------------------------------------------- */}

            <div className="saleDescription">
                <div className='titles'>
                    <h2>SALES INFORMATION</h2>
                </div>

                <div className="saleContainer">
                    <label> All Barcode </label>
                    <input type='text' required className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" value={barcode} onChange={(e) => setBarcode(e. target.value)}/>
                    <br/>
                    <label> Cost Of Sales  </label>
                    <input type='number' required className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" value={cos} onChange={(e) => setCostOfSales(e. target.value)}/>
                    <br/>
                    <label> Gross Price  </label>
                    <input type='number' required className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" value={gprice} onChange={(e) => setGrossPrice(e. target.value)}/>
                    <br/>
                    <label> Price  </label>
                    <input type='number' required className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" value={price} onChange={(e) => setPrice(e. target.value)}/>
                    <br/>
                    <label> Date and Time  </label>
                    <input type='datetime-local' required className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>

                </div>
                
            </div>
{/* ------------------------------------------------------------------------------------------------------------------------- */}
            <div className="shippingDescription">
            
                <div className='titles'>
                    <h2>SHIPPING</h2>
                </div>

                <div className="shippingContainer">
                    <label>Width </label>
                    <input type='number' required className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" value={width} onChange={(e) => setWidth(e. target.value)}/>
                    <br/>
                    <label>Length </label>
                    <input type='number' required className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" value={length} onChange={(e) => setLength(e. target.value)}/>
                    <br/>
                    <label>Volumetric Weight </label>
                    <input type='number' required className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" value={weight} onChange={(e) => setWeight(e. target.value)}/>
                    <br/>
                    <label>Packaging Type </label>
                    <select required className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" value={packagetype} onChange={(e) => setPackagingType(e. target.value)}>
                        <option value="pouch">Pouch</option>
                        <option value="box">Box</option>
                    </select>
                    <br/>
                    <label>Available Courier</label>
                    <select required className ="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" value={courier} onChange={(e) => setAvailableCourier(e. target.value)}>
                        <option value="pouch">Pouch</option>
                        <option value="box">Box</option>
                    </select>

                    <br/>


                </div>


            </div>
{/* ------------------------------------------------------------------------------------------------------------------------- */}
            
            <div className="tagCompiled">
                <div className='titles'>
                    <h2>TAGS</h2>
                    <button>ADD NEW</button>
                </div>

                <div className="tagContainer">
                    <div className="mainTags">
                        <h4>Main Tags</h4>
                        <button>Gemstone</button>
                        <button>Gemstone</button>
                        <button>Gemstone</button>
                    </div>
                    <div className="subTags">
                        <h4>Sub Tags</h4>
                        <button>Gemstone</button>
                        <button>Gemstone</button>
                        <button>Gemstone</button>

                            <div className="subTags1">
                                <h5>Wanted tag</h5>
                                <button>Gemstone</button>
                                <button>Gemstone</button>
                                <button>Gemstone</button>
                            </div>
                            <div className="subTags2">
                                <h5>Wanted Tag</h5>
                                <button>Gemstone</button>
                                <button>Gemstone</button>
                                <button>Gemstone</button>
                            </div>    
                    </div>
                </div>
            </div>
{/* ------------------------------------------------------------------------------------------------------------------------- */}

            <br/>
            <button type='submit'>SAVE AND  PUBLISH</button>

        </form>
    
    )
}

