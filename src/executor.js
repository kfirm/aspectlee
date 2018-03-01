export default class Executor {

    constructor(reference, name) {
        this.name = name;
        this.reference = reference;

        this.STATES = {
            BEFORE: 'BEFORE',
            AFTER: 'AFTER'
        };

        this.setState(this.STATES.BEFORE);
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getParams() {
        return this.params;
    }

    setParams(params) {
        this.params = params;
    }


    getResult() {
        return this.result;
    }

    setResult(result) {
        this.result = result;
        this.setState(this.STATES.AFTER);
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
    }

    getContext() {
        return {
            name: this.name,
            state: this.getState(),
            params: this.getParams(),
            result: this.result
        }
    }

    static STATES() {
        return {
            BEFORE: 'BEFORE',
            AFTER: 'AFTER'
        }
    }

    toString(){
        this.reference.toString();
    }

}