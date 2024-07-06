var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var product = [
    { name: 'Laptop', price: 5000, category: 'Electronic' },
    { name: 'Shirt', price: 1200, category: 'Outfits' },
    { name: 'Coffee Maker', price: 3500, category: 'Appliance' },
];
function filterProductByPrice(product) {
    return product.filter(function (data) { return data.price > 2000; });
}
function discountProduct(product) {
    return product.map(function (props) { return (__assign(__assign({}, props), { price: props.price * 0.9 })); });
}
var filterProduct = filterProductByPrice(product);
var discountProducts = discountProduct(filterProduct);
console.log(discountProducts);
