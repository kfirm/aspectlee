export class FuncDescription {

    constructor(func, name) {
        this.name = name;
        this.asText = func.toString();

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

    toObj() {
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

}