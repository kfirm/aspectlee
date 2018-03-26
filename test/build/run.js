import {Aspectlee, State} from '../../dist/index.js';

class foo {
    constructor() {
        console.log('foo class created');
    }

    bar(a, b, c) {

        console.log('Running bar function...');
        return 'Returned by bar';
    }
}

// With default print function
const fooObj = new foo();

Aspectlee(fooObj);
fooObj.bar('I','Am','Bar');


// With custom print function
const fooCustom = new foo();

Aspectlee(fooCustom, context => {
    if (context.state === State.BEFORE){
        console.log(`Function ${context.name} now running`);
    } else if (context.state === State.AFTER){
        console.log(`Function ${context.name} running ended with result ${context.result}`);
    }
});

fooCustom.bar('I','Am','Bar');