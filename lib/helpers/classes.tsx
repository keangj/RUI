// 对添加的多个 className 进行拼接，未传时去掉 undefined 和多余的空格
function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

export default classes;

interface Options {
  extra: string | undefined;
}
function scopedClassMaker(pre: string) {
  return function (name?: string, options?: Options) {
    const className = [pre, name].filter(Boolean).join('-');
    if (options && options.extra) {
      return [className, options.extra].filter(Boolean).join(' ');
    }
    return className
  }
}

export {scopedClassMaker}