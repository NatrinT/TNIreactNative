type Product = {
    name:string;
    price:number;
    category:string;
}

let product : Product[] = [
    {name:'Laptop',price:5000,category:'Electronic'},
    {name:'Shirt',price:1200,category:'Outfits'},
    {name:'Coffee Maker',price:3500,category:'Appliance'},
]

function filterProductByPrice(product:Product[],min:number):Product[] {
    return product.filter(data=>data.price>min);
}

function discountProduct(product:Product[]):Product[] {
    return product.map(props=>({...props,price:props.price*0.9}));
}

let filterProduct = filterProductByPrice(product,2000);
let discountProducts = discountProduct(filterProduct);

console.log(discountProducts);
