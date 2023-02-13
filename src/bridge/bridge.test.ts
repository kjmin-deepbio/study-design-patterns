import { ConcreteImplementorA, ConcreteImplementorB, RefinedAbstraction } from "./index";

describe("Bridge pattern", () => {
    test("RefinedAbstraction operation with ConcreteImplementorA", () => {
        const implementorA = new ConcreteImplementorA();
        const abstractionA = new RefinedAbstraction(implementorA);
        const returnText = abstractionA.operation();

        expect(returnText).toBe("[RefinedAbstraction]ConcreteImplementorA operation");
    });

    test("RefinedAbstraction operation with ConcreteImplementorB", () => {
        const implementorB = new ConcreteImplementorB();
        const abstractionB = new RefinedAbstraction(implementorB);
        const returnText = abstractionB.operation();

        expect(returnText).toBe("[RefinedAbstraction]ConcreteImplementorB operation");
    });
});
