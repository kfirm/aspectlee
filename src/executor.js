import {State} from './state.js';

export default class Executor {

    constructor(reference, name) {
        this.name = name;
        this.reference = reference;

        this.setState(State.BEFORE);
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
        this.setState(State.AFTER);
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

    toString(){
        this.reference.toString();
    }

}