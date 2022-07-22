export interface product {
    shopId : string,
    productName : string,
    description : string,
    proudctId : string,
    imgLink : string,
    price : string,
    stock : string
}

export const nullProduct : product = {
    shopId : '',
    productName : '',
    description : '',
    proudctId : '',
    imgLink : '',
    price : '',
    stock : ''
};