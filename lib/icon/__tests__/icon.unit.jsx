import * as renderer from 'react-test-renderer';
import React from 'react';
import Icon from '../icon';
import { mount } from 'enzyme'

describe('icon', () => {
  it('icon 渲染成功', () => {
    const json = renderer.create(<Icon name="qq"/>).toJSON();
    expect(json).toMatchSnapshot();  // 在 __snapshot__ 下生成快照，用 yarn test -u 更新快照
  });
  it('onClick', () => {
    const fn = jest.fn();
    const component = mount(<Icon name="qq" onClick={fn}/>);
    component.find('svg').simulate('click');
    expect(fn).toBeCalled();
  })
});