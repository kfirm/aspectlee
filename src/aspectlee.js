import {Interceptor} from "./interceptor.js";


export class Aspectlee {

    constructor(obj, reportFunc) {

        const props = Object.getPrototypeOf(obj);

        Object.getOwnPropertyNames(props).forEach( (funcKey) => {
            const funcInterseptor = new Interceptor(obj[funcKey],funcKey);
            obj[funcKey] = funcInterseptor.getInterceptor();
        });

    }
}