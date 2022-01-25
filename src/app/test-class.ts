import { TestClassBase } from "./test-class-base";

export class TestClass extends TestClassBase {
    constructor(thisName: string) {
        super(thisName);
        this.name = "Trut";
    }
    public getName() {
        return this.name;
    }
}
