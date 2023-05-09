import { fsync, writeFile, existsSync, mkdirSync } from "fs";
import { Product } from "../../models/Prouct";


const createfile = ( path: string,product: Product)=>{
    if (!existsSync(path)) {
        mkdirSync(path, {recursive: true});
    }
    writeFile(`${path}/${product.name}.json`, JSON.stringify(product),(err)=>{
        if (err) {
            console.log(err);
        }
    })
}

export default createfile;