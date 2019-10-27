import {runCallback, createObject, getData} from './demo';
import axios from 'axios';
// 1、mock函数，捕获函数调用和返回结果，以及this和调用顺序
// 2、自由设置函数返回结果
// 3、改变函数内部实现,同步模拟异步请求返回数据，不发送请求



// func.mock.calls - 调用传入的参数
// func.mock.instances - 
// func.mock.invocationCallOrder - 执行顺序
// func.mock.results - 调用函数返回值
test('测试runCallback', () => {
    const func = jest.fn();
    runCallback(func);
    expect(func).toBeCalled();
});
test('测试runCallback', () => {
    // mock函数，捕获函数调用和返回结果，以及this和调用顺序
    const func = jest.fn(() => {
        return '456';
    });
    runCallback(func);
    runCallback(func);
    // expect(func.mock.calls.length).toBe(1);
    expect(func.mock.calls[0]).toEqual(['abc']);
});

test.only('测试runCallback', () => {
     // mock函数，捕获函数调用和返回结果，以及this和调用顺序
    const func = jest.fn();
    //func.mockReturnValueOnce('dell').mockReturnValueOnce('mock');
    // 自由设置返回结果
    func.mockReturnValue('dell'); 
    runCallback(func);
    runCallback(func);
    expect(func.mock.calls[0]).toEqual(['abc']);
    console.log('mock',func.mock);
    // func.mock.calls - 调用传入的参数,调用次数
    // func.mock.instances - 调用的this,调用次数
    // func.mock.invocationCallOrder - 执行顺序
    // func.mock.results - 调用函数返回值，调用次数
});



test('测试createObject', ()=>{
    // mock函数，捕获函数调用
    const func = jest.fn();
    createObject(func);
    console.log('mock',func.mock);
});

// 
jest.mock('axios');
test('测试getData', async ()=>{
    // 第三个作用，改变函数内部实现
    axios.get.mockResolvedValue({data: 'hello'});
    await getData().then((data) => {
        expect(data).toBe('hello');

    });

});