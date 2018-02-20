export class FuncDescription {

    constructor(func, name){
        this.name = name;
        const funcString = func.toString();
    }

    name() {
        return this.name;
    }
}