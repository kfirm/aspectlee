import Interceptor from "./interceptor.js";


export default class Aspectlee {

    constructor(obj, printCallback) {

        const props = Object.getPrototypeOf(obj);

        Object.getOwnPropertyNames(props).forEach( (funcKey) => {

            if (typeof obj[funcKey] === 'function'){
                const funcInterseptor = new Interceptor(obj[funcKey], funcKey, printCallback);
                obj[funcKey] = funcInterseptor.getInterceptor();
            }
        });

    }
}