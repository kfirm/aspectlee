export class TestModule {

    constructor() {
    }

    test(message) {

        const myarg = Array.from(arguments);

        console.log('Here is my message: ', message);
        return 'Pimp!';
    }

}