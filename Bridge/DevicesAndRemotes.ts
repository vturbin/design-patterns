export interface Device {
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
    getVolume(): number;
    setVolume(percent: number): void;
}

class TV implements Device {
    private enabled = false;
    private volume = 0;

    public isEnabled(): boolean{ 
        return this.enabled
    }
    public enable(): void{ 
        this.enabled = true
    }
    public disable(): void{ 
        this.enabled = false
    }
    public getVolume(): number{ 
        return this.volume
    }
    public setVolume(percent: number): void{ 
        this.volume= percent
    }
}

class Radio implements Device {
    private enabled = false;
    private volume = 50;

    public isEnabled(): boolean{ 
        return this.enabled
    }
    public enable(): void{ 
        this.enabled = true
    }
    public disable(): void{ 
        this.enabled = false
    }
    public getVolume(): number{ 
        return this.volume
    }
    public setVolume(percent: number): void{ 
        this.volume= percent
    }
}

class RemoteControl {
    constructor(protected device: Device) {}

    public togglePower(): void {
        if(this.device.isEnabled()) return this.device.disable();
        this.device.enable();
    }

    public volumeDown(): void {
        this.device.setVolume(this.device.getVolume()-10)
    }

    public volumeUp(): void {
        this.device.setVolume(this.device.getVolume()+10)
    }
}

const tv = new TV()
const remote = new RemoteControl(tv);
remote.togglePower();