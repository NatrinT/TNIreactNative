var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Available"] = "Available";
    ProductStatus["OutOfStock"] = "OutOfStock ";
    ProductStatus["Discontinued"] = "Discontinued";
})(ProductStatus || (ProductStatus = {}));
var products = [
    { name: 'Laptop', status: ProductStatus.Available, price: 1200 },
    { name: 'SmartPhone', status: ProductStatus.OutOfStock, price: 700 },
    { name: 'Tablet', status: ProductStatus.Discontinued, price: 300 },
];
function display(products) {
    products.map(function (data) {
        var name = data.name, status = data.status, price = data.price;
        console.log(name, status, price);
    });
}
display(products);
