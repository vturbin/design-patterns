"use strict";
// =============== Adapter Pattern ===============
Object.defineProperty(exports, "__esModule", { value: true });
class IPhoneXs {
    useLightning() {
        console.log("Using lightning port..");
    }
}
class GooglePixel3 {
    useUSBc() {
        console.log("Using USB-C port..");
    }
}
// -------------------- Adapter class --------------------
class LightningToMicroUSBAdapter {
    constructor(iphone) {
        this.iphoneDevice = iphone;
    }
    useUSBc() {
        console.log('Want to use USBc, converting...');
        this.iphoneDevice.useLightning();
    }
}
// --------------------------------------------------------
let iphone = new IPhoneXs();
iphone.useLightning();
let chargeAdaptor = new LightningToMicroUSBAdapter(iphone);
chargeAdaptor.useUSBc();
