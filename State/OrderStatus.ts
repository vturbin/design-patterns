export interface OrderStatus {
    processOrder(order: Order): void;
    cancelOrder(order: Order): void;
  }
  
  class Order {
    private state: OrderStatus;
  
    setState(state: OrderStatus) {
      this.state = state;
    }
    
    processOrder() {
      this.state.processOrder(this);
    }
  
    cancelOrder() {
      this.state.cancelOrder(this);
    }
  }
  
  class NewOrderState implements OrderStatus {
    processOrder(order: Order) {
    console.log(order)
      console.log("Processing new order");
      order.setState(new InProgressOrderState());
    }
  
    cancelOrder(order: Order) {
      console.log("Canceling new order");
      order.setState(new CanceledOrderState());
    }
  }
  
  class InProgressOrderState implements OrderStatus {
    processOrder(order: Order) {
      console.log("Order is in progress");
      order.setState(new CompletedOrderState());
    }
  
    cancelOrder(order: Order) {
      console.log("Canceling in-progress order");
      order.setState(new CanceledOrderState());
    }
  }
  
  class CompletedOrderState implements OrderStatus {
    processOrder(order: Order) {
      console.log("Order completed");
    }
  
    cancelOrder(order: Order) {
      console.log("Cannot cancel completed order");
    }
  }
  
  class CanceledOrderState implements OrderStatus {
    processOrder(order: Order) {
      console.log("Cannot process canceled order");
    }
  
    cancelOrder(order: Order) {
      console.log("Order already canceled");
    }
  }
  
  const order = new Order();
  order.setState(new NewOrderState());
  order.processOrder();
  order.cancelOrder();
  order.processOrder();
  order.processOrder();
  