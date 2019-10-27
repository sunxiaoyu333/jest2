import Counter from './Counter';
let counter = null;
// beforeAll(()=>{
//     counter = new Counter();
// });
beforeEach(()=>{
    console.log('beforeEach');
    counter = new Counter();
});
afterEach(()=>{
    console.log('afterEach');
});
afterAll(()=>{
    console.log('afterAll');
});
describe('测试增加相关代码',() => {
    test('测试 Counter中addone方法', () => {
        counter.addOne();
        expect(counter.number).toBe(1);
    
    });
    test('测试 Counter中addTwo方法', () => {
        counter.addTwo();
        expect(counter.number).toBe(2);
    
    });

});

describe('测试减少相关代码',() => {
    test('测试 Counter中minusone方法', () => {
        counter.minusOne();
        expect(counter.number).toBe(-1);
    });
    test('测试 Counter中minusTwo方法', () => {
        counter.minusTwo();
        expect(counter.number).toBe(-2);
    });

});