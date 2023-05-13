interface Product{
    name: string;
    category: string;
    subcategory: string;
    description: string;
    quantity: string;
}

interface Sales{
    allBarcode: string;
    costOfSale: number;
    grossPrice: number;
    price: number;
    dateTime: string;
}

export type {Product, Sales}