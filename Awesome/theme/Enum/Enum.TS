

enum OrderStatus {
  Created = "CREATED",
  Processing = "PROCESSING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED"
}

function processOrder(status: OrderStatus) {
  switch (status) {
    case OrderStatus.Created:
      return "Заказ создан";
    case OrderStatus.Processing:
      return "Заказ обрабатывается";
    // ... и так далее
  }
}


