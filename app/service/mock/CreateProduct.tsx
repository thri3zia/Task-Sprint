import {  readFileSync } from "fs";
import { Product } from "../models/Prouct";
import createfile from "./helpers/Createfile";

const path = `app/service/mock/products`;
class mockAxios {
    post(product: Product){
        createfile(path ,product);
    }
    
    get():Product{
        let data: Product;

        try {
            data = JSON.parse(readFileSync(path, {encoding: 'utf8'})); 
        } catch (error) {
            throw error;
        }
        return data;
    }
}

export default mockAxios;