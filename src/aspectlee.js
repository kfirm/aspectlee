import Interceptor from './interceptor.js';
export {State} from './state.js'


class AspectleeClass {

    constructor(obj, printCallback) {

        const props = Object.getPrototypeOf(obj);

        Object.getOwnPropertyNames(props).forEach( (funcName) => {

            if (typeof obj[funcName] === 'function'){
                const funcInterseptor = new Interceptor(obj[funcName], funcName, printCallback);
                obj[funcName] = funcInterseptor.getInterceptor();
            }
        });

    }
}


export function Aspectlee(obj, printcb) {

    return new AspectleeClass(obj,printcb);

}

