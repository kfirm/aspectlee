var aop = require('../../dist/index.node.js');


function foo() {

    console.log('foo created.');

    this.bar = function (a, b, c) {
        console.log('Running bar function...');
        return 'Returned by bar';
    }
}

var fooObj = new foo();

aop.Aspectlee(fooObj);

fooObj.bar('I','Am','Bar');