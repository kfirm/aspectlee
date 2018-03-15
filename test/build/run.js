import {Aspectlee} from '../../dist/index.js';

export class TestModule {
    constructor() {
        console.log('TestModule');
    }

    test(params) {
        console.log('Got params',params);
        console.log('Returning general string....');

        return 'General string :)';
    }
}

const testModule = new TestModule();
const aspect = new Aspectlee(testModule);


testModule.test("hello","there");