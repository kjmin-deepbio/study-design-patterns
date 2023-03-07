import { ICommand } from "../common";

export class Light {
    turnOn(): string {
        return "ON";
    }

    turnOff(): string {
        return "OFF";
    }
}

export class TurnOnCommand implements ICommand {
    private readonly light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute() {
        return this.light.turnOn();
    }
}

export class TurnOffCommand implements ICommand {
    private readonly light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute() {
        return this.light.turnOff();
    }
}

export class RemoteControl {
    private onCommand!: ICommand;
    private offCommand!: ICommand;

    setOnCommand(command: ICommand): void {
        this.onCommand = command;
    }

    setOffCommand(command: ICommand): void {
        this.offCommand = command;
    }

    pressOnButton(): string {
        return this.onCommand?.execute();
    }

    pressOffButton(): string {
        return this.offCommand?.execute();
    }
}
