import {Aspectlee} from './src/aspectlee.js';
import {TestModule} from './src/test.module.js';

const testModule = new TestModule();

// const myAOP = new Aspectlee(testModule,(obj) => console.log(JSON.stringify(obj)));
const myAOP = new Aspectlee(testModule,(obj) => console.log(JSON.stringify(obj)));
testModule.test('Yo!',{ test: 'lala'});



// myAOP.test();