import { generateConfig, generateAntherConfig } from "./demo";
// test('测试generateConfig函数',()=>{
//     expect(generateConfig()).toMatchSnapshot({
//         time: expect.any(Date)
//     });
// });
// test('测试generateAntherConfig函数',()=>{
//     expect(generateAntherConfig()).toMatchSnapshot({
//         time: expect.any(Date)
//     });
// });

test("测试generateAntherConfig函数", () => {
  expect(generateAntherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "domain": "baidu.com",
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
