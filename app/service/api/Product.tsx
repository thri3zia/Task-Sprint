import mockAxios from "../mock/CreateProduct";
import { Product } from "../models/Prouct";

const api = new mockAxios(); 

const Product = (product: Product ) => {
  api.post(product);
}


export default Product;