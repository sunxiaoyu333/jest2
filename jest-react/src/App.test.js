import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import App from './App';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // const container = div.getElementsByClassName('App');
  // expect(container.length).toBe(1);
  // 浅渲染 只渲染app组件，内部组件不渲染 mount-全渲染
  const wrapper = shallow(<App/>);
  // expect(wrapper.find('[data-test="container"]').length).toBe(1);
  // expect(wrapper.find('[data-test="container"]').prop('title')).toBe('li');
  // 打印出app组件的结构
  // console.log(wrapper.debug());
  // expect(wrapper.find('[data-test="container"]')).toExist();
  // expect(wrapper.find('[data-test="container"]')).toHaveProp('title', 'li');
 
  // 快照
  expect(wrapper).toMatchSnapshot();
});
