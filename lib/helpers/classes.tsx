// 对添加的多个 className 进行拼接，未传时去掉 undefined 和多余的空格
function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

export default classes;

interface Options {
  extra: string | undefined;
}
interface ClassToggle {
  [K: string]: boolean;
}
function scopedClassMaker(prefix: string) {
  return function (name: string | ClassToggle, options?: Options) {
    const names = (typeof name === 'string' || name === undefined) ?
      {[name]: name} :
      name;

      const result = Object
        .entries(names)
        .filter(k => k[1] !== false)
        .map(k => k[0])
        .map(x => [prefix, x]
          .filter(Boolean)
          .join('-'))
        .join(' ');

    if (options && options.extra) {
      return [result, options.extra].filter(Boolean).join(' ');
    } else {
      return result
    }
  }
}

export {scopedClassMaker}