import addDivToBody from './demo';
import $ from 'jquery';
test('测试dom',()=>{
    addDivToBody();
    expect($('body').find('div').length).toBe(1);
});