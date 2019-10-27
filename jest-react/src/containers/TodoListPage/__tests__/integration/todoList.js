import React from 'react';
import  {shallow, mount} from 'enzyme';
import TodoList from '../../index';
import {Provider} from 'react-redux';
import {findTestWrapper} from '../../../../utils/testUtils';
import store from '../../../../store/createStore';
// 案列2
beforeEach(()=>{
  jest.useFakeTimers();
}); //模拟timers
it(`
    1、用户打开页面
    2、应展示接口返回数据
`,(done)=>{
      const wrapper = mount(
          <Provider store={store}>
          <TodoList/>
        </Provider>
      );
      // 等待当前时间片执行完，执行下一个时间片setTimeout功效一样// 案列1
      // process.nextTick(()=>{
      //   wrapper.update();
      //   console.log(wrapper.debug());
      //   const listItem = findTestWrapper(wrapper, 'list-item');
      //   expect(listItem.length).toBe(1);
      //   done();
      // });
      // 案列1
      // setTimeout(()=>{
      //   wrapper.update();
      //   console.log(wrapper.debug());
      //   const listItem = findTestWrapper(wrapper, 'list-item');
      //   expect(listItem.length).toBe(1);
      //   done();
      // },100);

      // 案列2 runAllTimers 让代码里面的timers立即执行
      jest.runAllTimers();
      expect(setTimeout).toHaveBeenCalledTimes(2);
      process.nextTick(()=>{
        wrapper.update();
        const listItem = findTestWrapper(wrapper, 'list-item');
        expect(listItem.length).toBe(1);
        done();
      });
});
