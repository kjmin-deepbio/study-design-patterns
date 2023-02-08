import { IStrategy } from "../common";

export class AdditionStrategy implements IStrategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}

export class SubtractionStrategy implements IStrategy {
    execute(a: number, b: number): number {
        return a - b;
    }
}

export class StrategyContext {
    private strategy: IStrategy;

    constructor(strategy: IStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: IStrategy) {
        this.strategy = strategy;
    }

    executeStrategy(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}
