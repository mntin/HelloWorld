before("before all test suites",() =>{
    console.log('before all test suites')
})

describe('first test suite',() => {

    before('before all test cases',() => {
        console.log('before all test case - first suite')
    })
    beforeEach('phase before every test case',() => {
        console.log('before each test case - first suite')
    })

    it('first test case',() => {
        console.log('first test case - first suite')
    })

    it('second test case',() => {
        console.log('second test case - first suite')
    })

    afterEach('phase after every test case',() => {
        console.log('after each test case - first suite')
    })

    after('after all test cases',() => {
        console.log('after all test case - first suite')
    })

})

describe('second test suite',() => {
    it('first test case - second suite',() => {
        console.log('first test case - second suite')
    })
})

after("after all test suites",() =>{
    console.log('after all test suites')
})