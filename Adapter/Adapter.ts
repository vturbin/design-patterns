
// =============== Adapter Pattern ===============

export interface IPhone {
  useLightning():void;
}

interface Android {
  useUSBc():void;
}

class IPhoneXs implements IPhone {
  useLightning() {
    console.log("Using lightning port..");
  }
}

class GooglePixel3 implements Android {
  useUSBc() {
    console.log("Using USB-C port..");
  }
}

// -------------------- Adapter class --------------------

class LightningToMicroUSBAdapter implements Android {
  iphoneDevice: IPhone;

  constructor(iphone: IPhone) {
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