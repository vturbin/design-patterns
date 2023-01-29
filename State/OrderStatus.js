"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    setState(state) {
        this.state = state;
    }
    processOrder() {
        this.state.processOrder(this);
    }
    cancelOrder() {
        this.state.cancelOrder(this);
    }
}
class NewOrderState {
    processOrder(order) {
        console.log(order);
        console.log("Processing new order");
        order.setState(new InProgressOrderState());
    }
    cancelOrder(order) {
        console.log("Canceling new order");
        order.setState(new CanceledOrderState());
    }
}
class InProgressOrderState {
    processOrder(order) {
        console.log("Order is in progress");
        order.setState(new CompletedOrderState());
    }
    cancelOrder(order) {
        console.log("Canceling in-progress order");
        order.setState(new CanceledOrderState());
    }
}
class CompletedOrderState {
    processOrder(order) {
        console.log("Order completed");
    }
    cancelOrder(order) {
        console.log("Cannot cancel completed order");
    }
}
class CanceledOrderState {
    processOrder(order) {
        console.log("Cannot process canceled order");
    }
    cancelOrder(order) {
        console.log("Order already canceled");
    }
}
const order = new Order();
order.setState(new NewOrderState());
order.processOrder();
order.cancelOrder();
order.processOrder();
order.processOrder();
