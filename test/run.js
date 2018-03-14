// import Aspectlee from './src/aspectlee.js'; // returns "Module"
import {Aspectlee} from '../src/index.js'; // returns "Module"
// import {Aspectlee} from './dist/bundle.js';

import {TestModule} from './module.js';

const testModule = new TestModule();
// const t = Afunc();

// const myAOP = new Aspectlee(testModule,(obj) => console.log(JSON.stringify(obj)));
const myAOP = new Aspectlee(testModule/*,(obj) => console.log(obj)*/);
testModule.test('Yo!',{ test: 'lala'});



// myAOP.test();