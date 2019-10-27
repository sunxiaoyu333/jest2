import {fetchData, fetchDatafn} from './fetchData';
// 回调类型异步函数的测试
// test('fetechData 返回内容',(done) => {
//     fetchDatafn((data) => {
//         expect(data).toEqual({
//             success: true
//         });
//         done();
//     });
// });

// 测试接口返回promise style1
// test('fetechData 返回内容',() => {
//     return fetchData().then(response => {
//         expect(response.data).toEqual({
//             success: true
//         });
//     });
// });

// 测试接口是否返回404
// test('fetechData 测试返回结果404',() => {
//     expect.assertions(1);
//     return fetchData().catch(e => {
//         expect(e.toString().indexOf('404') > -1).toBe(true);
//     });
// });

// 测试接口返回promise style2
// test('fetechData 返回内容',() => {
//     return expect(fetchData()).resolves.toMatchObject({
//         data: {
//             success: true
//         }
//     });
// });

// test('fetechData 测试返回结果404',() => {
//     return expect(fetchData()).rejects.toThrow();
// });

// 测试接口返回promise style3
// test('fetechData 返回内容',async () => {
//     await expect(fetchData()).resolves.toMatchObject({
//         data: {
//             success: true
//         }
//     });
// });

// test('fetechData 测试返回结果404',async () => {
//     await expect(fetchData()).rejects.toThrow();
// });


// 测试接口返回promise style4
// test('fetechData 返回内容',async () => {
//     const reponse = await fetchData();
//     expect(reponse.data).toEqual({
//         success: true
//     });
// });

test('fetechData 测试返回结果404',async () => {
    expect.assertions(1);
    try {
        await fetchData();
    } catch(e) {
        console.log('edddd',e.toString());
        expect(e.toString().indexOf('404') > -1).toBe(true);
    }
});