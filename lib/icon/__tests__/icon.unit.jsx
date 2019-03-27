import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'

describe('icon', () => {
  it('icon 渲染成功', () => {
    const json = renderer.create(<Icon name="qq"/>).toJSON();
    expect(json).toMatchSnapshot();  // 在 __snapshot__ 下生成快照，用 yarn test -u 更新快照
  })
});