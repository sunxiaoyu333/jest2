// import {getData} from './demo';
// import axios from 'axios';

// // jest模拟axios请求
// jest.mock('axios');
// test('测试getData', ()=>{
//     axios.get.mockResolvedValue({
//        data: '(function(){return "123"})()'
//     })
//     return getData().then((data) => {
//         expect(eval(data)).toEqual('123');
//     });
// });
jest.mock('./demo');
import {getData} from './demo';
const {getNumber} = jest.requireActual('./demo');


test('测试getData', ()=>{
    expect(getNumber()).toEqual(123);
});