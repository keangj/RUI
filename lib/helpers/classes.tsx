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
  return function (name?: string | ClassToggle, options?: Options) {
    let result;
    if (typeof name === 'string' || name === undefined) {
      result = [prefix, name].filter(Boolean).join('-');
    } else {
      result = Object.entries(name)
        .filter(k => k[1]).map(k => k[0])
        .map(x => [prefix, x]
          .filter(Boolean)
          .join('-'))
        .join(' ');
    }
    // const className = [prefix, name].filter(Boolean).join('-');
    if (options && options.extra) {
      return [result, options.extra].filter(Boolean).join(' ');
    } else {
      return result
    }
  }
}

export {scopedClassMaker}