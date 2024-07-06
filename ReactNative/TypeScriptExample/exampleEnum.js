// กำหนดตัวแปร
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
// create function
function displayOrderStatus(status) {
    switch (status) {
        case OrderStatus.Pending:
            console.log("Your order is ".concat(OrderStatus.Pending));
            break;
        case OrderStatus.Shipped:
            console.log("Your order is ".concat(OrderStatus.Shipped));
            break;
        case OrderStatus.Cancelled:
            console.log("Your order is ".concat(OrderStatus.Cancelled));
            break;
        default:
            console.log("Unknown order status");
            break;
    }
}
//test function
displayOrderStatus(OrderStatus.Cancelled);
