import { IComponent } from "../common";
import { Composite, CompositeLeaf } from "../index";

export interface IAbsFactory {
    createComponent(): IComponent;
}

export class CompositeLeafFactory implements IAbsFactory {
    createComponent() {
        return new CompositeLeaf();
    }
}

export class CompositeFactory implements IAbsFactory {
    createComponent() {
        return new Composite();
    }
}
