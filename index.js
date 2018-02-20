import {Aspectlee} from './src/aoplee.js';
import {TestModule} from "./src/test.module.js"

const testModule = new TestModule();

const myAOP = new Aspectlee(testModule);
testModule.test('Yo!',{ test: 'lala'});



// myAOP.test();