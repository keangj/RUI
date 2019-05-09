// 对添加的多个 className 进行拼接，未传时去掉 undefined 和多余的空格
function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

export default classes;

function scopedClassMaker(pre: string) {
  return function (name?: string) {
    return [pre, name].filter(Boolean).join('-');
  }
}

export {scopedClassMaker}