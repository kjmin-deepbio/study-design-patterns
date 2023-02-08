import { AdditionStrategy, StrategyContext, SubtractionStrategy } from "./index";

describe("Context", () => {
    it("should execute addition strategy correctly", () => {
        const context = new StrategyContext(new AdditionStrategy());
        expect(context.executeStrategy(10, 5)).toBe(15);
    });

    it("should execute subtraction strategy correctly", () => {
        const context = new StrategyContext(new SubtractionStrategy());
        expect(context.executeStrategy(10, 5)).toBe(5);
    });

    it("should change strategy at runtime", () => {
        const context = new StrategyContext(new AdditionStrategy());
        expect(context.executeStrategy(100, 11)).toBe(111);
        context.setStrategy(new SubtractionStrategy());
        expect(context.executeStrategy(111, 222)).toBe(-111);
    });
});
