export interface IComponent {
    operation(): string;
}

export class CompositeLeaf implements IComponent {
    operation(): string {
        return "Leaf";
    }
}

export class Composite implements IComponent {
    private children: IComponent[] = [];

    operation(): string {
        let result = "Composite";
        for (const child of this.children) {
            result += child.operation();
        }
        return result;
    }

    add(child: IComponent): void {
        this.children.push(child);
    }

    remove(child: IComponent): void {
        const index = this.children.indexOf(child);
        this.children.splice(index, 1);
    }

    getChild(index: number): IComponent {
        return this.children[index];
    }
}
