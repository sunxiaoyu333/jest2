// const math = require('./math.js');
import {add , minus, multi} from './math';

test('测试加法3 + 7',() =>{
    expect(add(3, 7)).toBe(10);
});
test('测试加法3 - 3',() =>{
    expect(minus(3, 3)).toBe(0);
});

// jest完成单元测试、集成测试（多个模块测试）
// npm run test
// jest 集成(babel-jest)插件  
// 检测当前环境是否安装了bable或者babel-core
// babelrc配置，运行测试之前,babel做转化