"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
class CustomerService {
    orderItem(item, payment) {
        const paymentProcessor = new PaymentProcessing();
        paymentProcessor.sendPayment(payment);
        const warehouse = new Warehouse();
        const itemToDeliver = warehouse.getItem(item);
        const packagingSystem = new Packaging();
        const readyToDeliverItem = packagingSystem.packageItem(itemToDeliver);
        const delivery = new Delivery();
        const itemSentForDelivery = delivery.sendDelivery(readyToDeliverItem);
        return delivery.getDeliveryStatus(itemSentForDelivery);
    }
}
exports.CustomerService = CustomerService;
class Warehouse {
    constructor() {
        this.warehouseItems = [];
    }
    getItem(item) {
        return this.warehouseItems.filter(warehouseItem => warehouseItem === item);
    }
}
class PaymentProcessing {
    sendPayment(payment) {
        const result = this.payTaxes(payment);
        this.sendToBusinessAccount(result);
    }
    payTaxes(payment) {
        const VAT = 0.19;
        return payment - payment * VAT;
    }
    sendToBusinessAccount(amount) {
        console.log('Sent to business account');
    }
}
class Packaging {
    packageItem(deliveryItem) {
        console.log('item has been packaged and labeled');
        deliveryItem.label = '0132421-40213';
        return deliveryItem;
    }
}
class Delivery {
    getDeliveryStatus(trackingNumber) { return 'IN_PROGRESS'; }
    sendDelivery(deliveryItem) {
        console.log('Item has been sent!');
        deliveryItem.trackingNumber = '32193.3210.0';
        return deliveryItem;
    }
}
