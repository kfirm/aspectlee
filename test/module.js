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
