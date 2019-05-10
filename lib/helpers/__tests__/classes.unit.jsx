import classes, { scopedClassMaker } from '../classes'

describe('测试 classes helper 函数', () => {
  it('接收 0 个参数', () => {
    const result = classes();
    expect(result).toEqual('');
  });
  it('接收 1 个参数', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  });
  it('接收 2 个参数', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b');
  });
  it('接收 undefined 结果不显示 undefined', () => {
    const result = classes('a', undefined, 'b');
    expect(result).toEqual('a b');
  });
  it('接收特殊的参数', () => {
    const result = classes('a', undefined, 'b', null, false, '中文');
    expect(result).toEqual('a b 中文');
  });
});

describe('测试 scopedClassMaker 函数', () => {
  it('接收字符串或对象', () => {
    const sc = scopedClassMaker('ui');
    expect(sc('')).toEqual('ui');
    expect(sc('a')).toEqual('ui-a');
    expect(sc({'': true, a: true})).toEqual('ui ui-a');
    expect(sc({a: true, b: false, c: true})).toEqual('ui-a ui-c');
    expect(sc({a: false, b: false, c: true}, {extra: 'd'})).toEqual('ui-c d');
  })
})