"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemoteControl {
    constructor(device) {
        this.device = device;
    }
    togglePower() {
        if (this.device.isEnabled())
            return this.device.disable();
        this.device.enable();
    }
    volumeDown() {
        this.device.setVolume(this.device.getVolume() - 10);
    }
    volumeUp() {
        this.device.setVolume(this.device.getVolume() + 10);
    }
}
class AdvancedRemoteControl extends RemoteControl {
    constructor(device) {
        super(device);
        this.device = device;
    }
    mute() {
        this.device.setVolume(0);
    }
}
class TV {
    constructor() {
        this.enabled = false;
        this.volume = 0;
    }
    isEnabled() {
        return this.enabled;
    }
    enable() {
        this.enabled = true;
    }
    disable() {
        this.enabled = false;
    }
    getVolume() {
        return this.volume;
    }
    setVolume(percent) {
        this.volume = percent;
    }
}
class Radio {
    constructor() {
        this.enabled = false;
        this.volume = 50;
    }
    isEnabled() {
        return this.enabled;
    }
    enable() {
        this.enabled = true;
    }
    disable() {
        this.enabled = false;
    }
    getVolume() {
        return this.volume;
    }
    setVolume(percent) {
        this.volume = percent;
    }
}
const tv = new TV();
const remote = new RemoteControl(tv);
remote.togglePower();
