import { CompositeLeaf, Composite } from "./index";

describe("Composite pattern", () => {
    it("Leaf returns correct string", () => {
        const leaf = new CompositeLeaf();
        expect(leaf.operation()).toEqual("Leaf");
    });

    it("Composite with only one leaf returns correct string", () => {
        const composite = new Composite();
        composite.add(new CompositeLeaf());
        expect(composite.operation()).toEqual("CompositeLeaf");
    });

    it("Composite with multiple leaves returns correct string", () => {
        const composite = new Composite();
        composite.add(new CompositeLeaf());
        composite.add(new CompositeLeaf());
        expect(composite.operation()).toEqual("CompositeLeafLeaf");
    });

    it("Composite with nested composites returns correct string", () => {
        const composite = new Composite();
        composite.add(new CompositeLeaf());

        const nestedComposite = new Composite();
        nestedComposite.add(new CompositeLeaf());
        composite.add(nestedComposite);

        expect(composite.operation()).toEqual("CompositeLeafCompositeLeaf");
    });
});
