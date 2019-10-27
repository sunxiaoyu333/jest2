jest.mock('./demo');
// jest.unmock('./demo'); //取消引用__mock__下的文件
import {fetchData} from './demo';
const {getNumber} = jest.requireActual('./demo');

test('fetchdata数据',()=>{
    return fetchData().then(data => {
        expect(eval(data)).toEqual('123');
    });
});
test('getNumber数据',()=>{
    expect(getNumber()).toEqual('123');
});
