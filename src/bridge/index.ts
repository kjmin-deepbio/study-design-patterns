import { IComponent } from "../common";

export class ConcreteImplementorA implements IComponent {
    operation() {
        return "ConcreteImplementorA operation";
    }
}

export class ConcreteImplementorB implements IComponent {
    operation() {
        return "ConcreteImplementorB operation";
    }
}

export abstract class Abstraction {
    protected implementor: IComponent;

    constructor(implementor: IComponent) {
        this.implementor = implementor;
    }

    abstract operation(): string;
}

export class RefinedAbstraction extends Abstraction {
    operation() {
        return "[RefinedAbstraction]" + this.implementor.operation();
    }
}
