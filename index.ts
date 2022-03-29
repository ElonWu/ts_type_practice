/**
 *  infer
 */

// 条件类型 + infer 关键字拆解字符串
type ElonReturn<T> = T extends `${infer Key}=${infer Value}`
  ? { [key in Key]: Value }
  : never;

function split<T extends string>(str: T): ElonReturn<T> {
  const [key, value] = str.split('=');
  return { [key]: value } as ElonReturn<T>;
}
const res = split('a=b');

/**
 *  模板类型
 */
type Lang = 'cn' | 'en';
type GreetingMessage = 'greeting' | 'hello';
type FarewareMessage = 'goodbye' | 'fareware';

type LocaleMessage = `${Lang}_${GreetingMessage | FarewareMessage}_id`;

// 示例 给每个关键字增加 onchange 事件
type withOnChange<T> = {
  on: (
    eventName: `${string & keyof T}Change`,
    callback: (newValue: any) => void,
  ) => void;
};

// TODO 如何理解 declare function 的实际效果
// playground 没有创建函数，却仍然调用了
// 在实际运行环境下会报错
declare function objWithOnChange<T>(obj: T): T & withOnChange<T>;
const obj = objWithOnChange({ name: 'abc' });

obj.on('nameChange', (newValue) => {});
