import { ConcreteComponent, ConcreteDecoratorA, ConcreteDecoratorB } from "./index";

describe("decorator pattern", () => {
    it("should return the expected output", () => {
        const component = new ConcreteComponent();
        const baseDecorator = new ConcreteDecoratorA(component);
        const decoratorAB = new ConcreteDecoratorB(baseDecorator);
        const decoratorAA = new ConcreteDecoratorA(baseDecorator);

        expect(decoratorAB.operation()).toBe(
            "ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent))"
        );

        expect(decoratorAA.operation()).toBe(
            "ConcreteDecoratorA(ConcreteDecoratorA(ConcreteComponent))"
        );
    });
});
