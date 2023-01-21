export class CustomerService {
    public orderItem(item: any, payment: number): string {
        const paymentProcessor = new PaymentProcessing();
        paymentProcessor.sendPayment(payment)
        const warehouse = new Warehouse()
        const itemToDeliver = warehouse.getItem(item);
        const packagingSystem = new Packaging()
        const readyToDeliverItem = packagingSystem.packageItem(itemToDeliver)
        const delivery = new Delivery()
        const itemSentForDelivery = delivery.sendDelivery(readyToDeliverItem)
        return delivery.getDeliveryStatus(itemSentForDelivery)
    }
}

class Warehouse {
    private warehouseItems: any[] = []

    public getItem(item: any): any {
        return this.warehouseItems.filter(warehouseItem=> warehouseItem === item)
    }
}


class PaymentProcessing {
    public sendPayment(payment: any): void {
        const result = this.payTaxes(payment)
        this.sendToBusinessAccount(result) 
    }

    private payTaxes(payment: number):number {
        const VAT = 0.19
        return payment - payment * VAT
    }

    private sendToBusinessAccount(amount: number): void {
        console.log('Sent to business account')
    }
}

class Packaging {

    public packageItem(deliveryItem: any): any {
        console.log('item has been packaged and labeled')
        deliveryItem.label = '0132421-40213'
        return deliveryItem
    }
    
}

class Delivery {

    public getDeliveryStatus(trackingNumber: string):string { return 'IN_PROGRESS'}

    public sendDelivery(deliveryItem: any):any { console.log('Item has been sent!');
     deliveryItem.trackingNumber = '32193.3210.0';
     return deliveryItem}

}