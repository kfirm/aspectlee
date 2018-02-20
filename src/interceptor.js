import {FuncDescription} from "./func.description.js";

export class Interceptor {

    private stringifyArgs (args) {
        for (let i = 0; i < args.length; i++){
            switch (typeof args[i]){
                case 'object':
                    args[i] = JSON.stringify(args[i]);
                    break;
            }
        }
    }

    constructor(func, name) {
        this.inspect = func;
        this.funcDescription = new FuncDescription(func, name);
        this.setInterception();
        this.setReportFunc(console.log);
    }

    setInterception() {

        this.originalFunc = this.inspect;
        this.inspect = (...args) => {

            // For some reason the following returns an empty array
            // const args = Array.from(arguments);
            // const args2 = [...arguments];
            this.before(args);
            this.result = this.originalFunc.apply(this, args);
            this.after();
        }
    }

    getInterseption() {
        return this.inspect;
    }

    setReportFunc (reportFunc){
        this.reportFunc = reportFunc;
    }


    before(args) {

        const funcName = this.funcDescription.name;

        args = this.stringifyArgs(args);

        const message = `Executing ${funcName} with parameters: ${args}.`;

        this.reportFunc(message);
    }

    after() {

        const funcName = this.funcDescription.name;
        const params = [];

        const message = `Finished executing ${funcName} with parameters: ${params}. Result: ${this.result}`;

        this.reportFunc(message);
    }
}
