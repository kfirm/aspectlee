import Interceptor from './interceptor.js';
export {State} from './state.js'


class AspectleeClass {

    getAllFuncs(obj) {
        var props = [];

        do {
            // excluding inner object functions
            if (Object.getOwnPropertyNames(obj).indexOf('hasOwnProperty') >-1 ) {
                break;
            } else {
                props = props.concat(Object.getOwnPropertyNames(obj));
            }

        } while (obj = Object.getPrototypeOf(obj));

        // return props.sort().filter(function(e, i, arr) {
        //     if (e!=arr[i+1] && typeof obj[e] == 'function') return true;
        // });

        return props;
    }

    constructor(obj, printCallback) {

        this.getAllFuncs(obj).forEach( (funcName) => {

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

