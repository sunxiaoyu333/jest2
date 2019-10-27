import timer from './timer';
import { exportAllDeclaration } from '@babel/types';

beforeEach(()=>{
    jest.useFakeTimers(); //模拟timers

});

// test('timer 测试',(done)=>{
//     timer(()=>{
//         expect(1).toBe(1);
//         done();
//     });
// });
test('timer 测试',()=>{
    const fn = jest.fn();
    timer(fn);
    // jest.runAllTimers(); //立即执行
    // jest.runOnlyPendingTimers(); //立即调用队列中的
    jest.advanceTimersByTime(6000); //快进,在上一次定时器累加的
    expect(fn).toHaveBeenCalledTimes(2);   
});