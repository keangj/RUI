import classes from '../classes';

describe('测试 classes helper 方法', () => {
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