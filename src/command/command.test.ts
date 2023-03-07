import { Light, TurnOnCommand, TurnOffCommand, RemoteControl } from "./index";

describe("RemoteControl", () => {
    let light: Light;
    let turnOnCommand: TurnOnCommand;
    let turnOffCommand: TurnOffCommand;
    let remoteControl: RemoteControl;

    beforeEach(() => {
        light = new Light();
        turnOnCommand = new TurnOnCommand(light);
        turnOffCommand = new TurnOffCommand(light);
        remoteControl = new RemoteControl();
    });

    it("should turn on the light when the on button is pressed", () => {
        remoteControl.setOnCommand(turnOnCommand);
        const result = remoteControl.pressOnButton();
        expect(result).toEqual("ON");
    });

    it("should turn off the light when the off button is pressed", () => {
        remoteControl.setOffCommand(turnOffCommand);
        const result = remoteControl.pressOffButton();
        expect(result).toEqual("OFF");
    });
});
