import Executor from "./executor.js";

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


export default class Interceptor {

    constructor(functionReference, functionName, printCallBack) {
        // this.interceptor = functionReference;
        this.execution = new Executor(functionReference, functionName);

        this.setInterception(functionReference);

        if (printCallBack){
            this.printCallBack = printCallBack;
        }

        this.before(this.printCallBack);
        this.after(this.printCallBack);
    }

    setInterception(functionReference) {

        // const functionReference = this.interceptor;
        this.interceptor = (...args) => {

            // For some reason the following returns an empty array
            // const args = Array.from(arguments);
            // const args2 = [...arguments];

            const stringifiedArgs = new Utils().stringifyArgs(args);

            this.execution.setParams(stringifiedArgs);
            this.beforeCallback(this.execution.getContext());
            this.execution.setResult(functionReference.apply(this, args));
            this.afterCallback(this.execution.getContext());
        }
    }

    before(beforeCallback){
     if (beforeCallback && typeof beforeCallback === 'function'){
         this.beforeCallback = beforeCallback;
     }

     return this;

    }



    after(afterCallback){
        if (afterCallback  && typeof afterCallback === 'function'){
            this.afterCallback = afterCallback;
        }

        return this;
    }

    getInterceptor() {
        return this.interceptor;
    }


    printCallBack(funcDescription) {
        switch (funcDescription.state){
            case Executor.STATES().BEFORE:
                console.log(`Executing function '${funcDescription.name}' with parameters: ${funcDescription.params}.`);
                break;
            case Executor.STATES().AFTER:
                const result = funcDescription.result;
                console.log(`Finished executing '${funcDescription.name}' with parameters: ${funcDescription.params}. Result: ${typeof result === 'object' ? JSON.stringify(result) : result}`);
                break;
        }
    }
}
