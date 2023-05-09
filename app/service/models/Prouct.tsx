export interface Product {
    name: String;
    category: String;
    sub_category: String;
    email: String;
    descrpition: String;
    quantity: Number;
    media: Array<Number>;
    salesinfo: Salesinfo;
    shipping: Shipping;
}

interface Salesinfo{
    allBarcode: String;
    costOfSale: Number;
    grossPrice: Number;
    price: Number;
    dateTime: String;
}

interface Shipping{
    width: Number;
    lenght: Number;
    volumetricWeight: Number;
    pckgTypPouch: String;
    avlblCrrPouch: String;
}