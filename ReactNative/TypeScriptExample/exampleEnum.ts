// กำหนดตัวแปร
enum OrderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Cancelled = "Cancelled",
}

// create function
function displayOrderStatus(status: OrderStatus) {
  switch (status) {
    case OrderStatus.Pending:
      console.log(`Your order is ${OrderStatus.Pending}`);
      break;
    case OrderStatus.Shipped:
      console.log(`Your order is ${OrderStatus.Shipped}`);
      break;
    case OrderStatus.Cancelled:
      console.log(`Your order is ${OrderStatus.Cancelled}`);
      break;
    default:
      console.log("Unknown order status");
      break;
  }
}

//test function
displayOrderStatus(OrderStatus.Cancelled);