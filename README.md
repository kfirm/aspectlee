# Aspectlee

Aspectlee is an Aspect oriented programming library for browser and/or node applications

# Installation 

```
npm install --save aspectlee
```

Or for browser:

```angular2html
<script src="unpk"></script>
```

# Usage

With default output print function:

```angular2html

import {Aspectlee} from 'aspectlee';

class foo {
    constructor() {
        console.log('foo class created');
    }

    bar(a, b, c) {
        
        console.log('Running bar function...');        
        return 'Returned by bar';
    }
}


const fooObj = new foo();

Aspectlee(fooObj);

foo.bar('I','Am','Bar');

/*

output:

foo class created
Executing function 'bar' with parameters: I,Am,Bar.
Running bar function...
Finished executing 'bar' with parameters: I,Am,Bar. Result: Returned by bar

*/

```

With custom print function:

```angular2html
import {Aspectlee, State} from 'aspectlee';

class foo {
    constructor() {
        console.log('foo class created');
    }

    bar(a, b, c) {
        
        console.log('Running bar function...');        
        return 'Returned by bar';
    }
}


const fooObj = new foo();

Aspectlee(fooObj, context => {
    if (context.state === State.BEFORE){
        console.log(`Function ${context.name} now running`);
    } else if (context.state === State.AFTER){
        console.log(`Function ${context.name} running ended with result ${context.result}`);
    }
});

foo.bar('I','Am','Bar');

/* output:

foo class created
Function bar now running
Running bar function...
Function bar running ended with result Returned by bar

*/

```

