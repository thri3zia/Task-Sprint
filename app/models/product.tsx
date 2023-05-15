interface Product{
    name: string;
    category: string;
    subcategory: string;
    description: string;
    quantity: string;
}

interface Sales{
    barcode: string;
    sales: number;
    gprice: number;
    price: number;
    datetime: string;
}

interface Shipping{
    width: number;
    length: number;
    weight: number;
    packagetype: string;
    courier: string;
}

interface Tags{
    main: string;
    sub: string;
}

export type {Product, Shipping , Sales, Tags}