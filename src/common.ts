export interface IComponent {
    operation(): string;
}

export interface IStrategy {
    execute(a: number, b: number): number;
}

export interface ICommand {
    execute(): string;
}
