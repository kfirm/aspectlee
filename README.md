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

```angular2html

import {Aspectlee} from 'aspectlee';

export class foo {
    constructor() {
        console.log('foo class created');
    }

    bar(a, b, c) {
        
        console.log('Running bar function...');        
        return 'Returned by bar';
    }
}


const fooObj = new foo();
const fooObjAspect = new Aspectlee(fooObj);
foo.bar('I','Am','Bar');

/*

output:

foo class created
Executing function 'bar' with parameters: I,Am,Bar.
Running bar function...
Finished executing 'bar' with parameters: I,Am,Bar. Result: Returned by bar

*/

```
