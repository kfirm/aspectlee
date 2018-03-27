// var aop = require('../../dist/index.node.js');
var aop = require('aspectlee');


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