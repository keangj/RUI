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
const scopedClassMaker = (prefix: string) =>
   (name: string | ClassToggle, options?: Options) =>
    Object
      .entries(name instanceof Object ? name : {[name]: name})
      .filter(keyVal => keyVal[1] !== false)
      .map(keyVal => keyVal[0])
      .map(name => [prefix, name]
        .filter(Boolean)
        .join('-'))
      .concat(options && options.extra || [])
      .join(' ');

export {scopedClassMaker};