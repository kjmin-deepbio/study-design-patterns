import { IComponent } from "../common";

export class ConcreteComponent implements IComponent {
    operation(): string {
        return "ConcreteComponent";
    }
}

export class ConcreteDecoratorA implements IComponent {
    private component: IComponent;

    constructor(component: IComponent) {
        this.component = component;
    }

    operation(): string {
        return `ConcreteDecoratorA(${this.component.operation()})`;
    }
}

export class ConcreteDecoratorB implements IComponent {
    private component: IComponent;

    constructor(component: IComponent) {
        this.component = component;
    }

    operation(): string {
        return `ConcreteDecoratorB(${this.component.operation()})`;
    }
}
