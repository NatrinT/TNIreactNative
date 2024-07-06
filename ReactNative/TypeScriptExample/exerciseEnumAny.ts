
enum ProductStatus {
    Available = "Available",
    OutOfStock  = "OutOfStock ",
    Discontinued = "Discontinued",
}

let products: any[] = [
    {name:'Laptop',status:ProductStatus.Available,price:1200},
    {name:'SmartPhone',status:ProductStatus.OutOfStock,price:700},
    {name:'Tablet',status:ProductStatus.Discontinued,price:300},
]

function display(products:any[]) {
    products.map(data => {
        let {name,status,price} = data;
        console.log(name,status,price);
    });
}

display(products);