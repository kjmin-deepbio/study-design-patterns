import { Composite, CompositeLeaf } from "../index";
import { CompositeFactory, CompositeLeafFactory } from "./index";

describe("Abstract Factory pattern", () => {
    test("CompositeFactory creates Composite", () => {
        const factory = new CompositeFactory();
        const shape = factory.createComponent();
        expect(shape).toBeInstanceOf(Composite);
    });

    test("CompositeLeafFactory creates CompositeLeaf", () => {
        const factory = new CompositeLeafFactory();
        const shape = factory.createComponent();
        expect(shape).toBeInstanceOf(CompositeLeaf);
    });
});
