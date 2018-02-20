import {FuncDescription} from "./func.description.js";

class Utils {
    stringifyArgs (args) {

        let stringifiedArgs = [];

        for (let i = 0; i < args.length; i++){

            stringifiedArgs.push(args[i]);

            switch (typeof args[i]){
                case 'object':
                    stringifiedArgs[i] = JSON.stringify(stringifiedArgs[i]);
                    break;
            }
        }

        return stringifiedArgs;
    }
}


export class Interceptor {

    constructor(func, name, printCallBack) {
        this.interceptor = func;
        this.funcDescription = new FuncDescription(func, name);
        this.setInterception();

        if (printCallBack){
            this.printCallBack = printCallBack;
        }
    }

    setInterception() {

        this.originalFunc = this.interceptor;
        this.interceptor = (...args) => {

            // For some reason the following returns an empty array
            // const args = Array.from(arguments);
            // const args2 = [...arguments];

            const stringifiedArgs = new Utils().stringifyArgs(args);

            this.funcDescription.setParams(stringifiedArgs);
            this.printCallBack(this.funcDescription.toObj());
            this.funcDescription.setResult(this.originalFunc.apply(this, args));
            this.printCallBack(this.funcDescription.toObj());
        }
    }

    getInterceptor() {
        return this.interceptor;
    }


    printCallBack(funcDescription) {
        switch (funcDescription.state){
            case FuncDescription.STATES().BEFORE:
                console.log(`Executing function '${funcDescription.name}' with parameters: ${funcDescription.params}.`);
                break;
            case FuncDescription.STATES().AFTER:
                const result = funcDescription.result;
                console.log(`Finished executing '${funcDescription.name}' with parameters: ${funcDescription.params}. Result: ${typeof result === 'object' ? JSON.stringify(result) : result}`);
                break;
        }
    }
}
