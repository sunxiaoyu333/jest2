// https://jestjs.io/docs/en/expect 匹配器的地址
// test('测试10与10相匹配',() =>{
//     // toBe匹配器 matchers ===
//     const a = {one : 1};
//     expect(a).toBe({one : 1});
// });

test('测试对象内容相等',() =>{
    // toEqual匹配器 
    const a = {one : 1};
    expect(a).toEqual({one : 1});
});

test('测试对象是否是null',() =>{
    // toBeNull匹配器 
    const a = null;
    expect(a).toBeNull();
});

test('测试对象是否undefined',() =>{
    // toBeUndefined匹配器 
    const a = undefined;
    expect(a).toBeUndefined();
});

test('测试对象是否undefined',() =>{
    // toBeUndefined匹配器 
    const a = undefined;
    expect(a).toBeUndefined();
});

test('测试对象是否被定义过',() =>{
    // toBeDefined匹配器 
    const a = 11;
    expect(a).toBeDefined();
});

test('toBeTruthy定义器',() =>{
    // toEqual匹配器 
    const a = 1;
    expect(a).toBeTruthy();
});
test('toBeFalsy定义器',() =>{
    // toEqual匹配器 
    const a = 0;
    expect(a).toBeFalsy();
});
test('not定义器',() =>{
    // toEqual匹配器 
    const a = 1;
    expect(a).not.toBeFalsy();
});

// 数字相关匹配器
test('toBeGreaterThan',() =>{
    // 比指定数字小 
    const count = 10;
    expect(count).toBeGreaterThan(8);
});
test('toBeLessThan',() =>{
    //  比指定数字大 
    const count = 10;
    expect(count).toBeLessThan(11);
});

test('toBeGreaterThanOrEqual',() =>{
    //  比指定数字大于等于
    const count = 10;
    expect(count).toBeGreaterThanOrEqual(10);
});
test('toBeCloseTo',() =>{
    //  测试小数用toBeCloseTo，计算有溢位
    const count1 = 0.1;
    const count2 = 0.1;
    expect(count1+count2).toBeCloseTo(0.2);
});
// 字符串相关匹配器
test('toMatch',() =>{
    //  测试小数用toBeCloseTo，计算有溢位
    const str = "https://baidu.com";
    expect(str).toMatch(/baidu/);
});
// array,set匹配器
test('toContain',() =>{
    //  测试小数用toBeCloseTo，计算有溢位
    const arr = ['ell', 'baidu'];
    expect(arr).toContain('baidu');
});

// 异常匹配器
const throwNewFuc = () => {
    throw new Error("this is a throw");
};
test('toThrow', () =>{
    expect(throwNewFuc).toThrow(/this is a throw/);
});
