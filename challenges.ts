/**
 *
 * @author ElonWu
 * @description Partial 从对象类型 T 取出任意 keys 的子集构造出的对象类型
 *
 */
type ElonPartial<T> = {
  [key in keyof T]?: T[key]; // 任意 key 都是可选项
};

// 官方示例  https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todoPartial: ElonPartial<Todo> = {
  description: 'abc',
};

/**
 *
 * @description Required 从对象类型 T 取出指定 keys 为必选
 *
 */

type RequiredByKeys<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>;

// 官方示例  https://www.typescriptlang.org/docs/handbook/utility-types.html#Requiredtype
interface CasualTodo {
  title?: string;
  description?: string;
}

const todoRequired: RequiredByKeys<CasualTodo, 'title' | 'description'> = {
  title: 'abc',
  description: 'abc',
};

/**
 *
 * @author ElonWu
 * @description Pick 从对象类型 T 中取 keys 的子集，构造出新的对象类型
 *
 */
type ElonPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

// 官方示例  https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
type TodoPreview = ElonPick<Todo, 'title' | 'completed'>;

const todo1: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

/**
 *
 * @author ElonWu
 * @description Omit 从对象类型 T 中去除 keys 的子集，利用剩余 keys 构造出新的对象类型
 *
 */
type ElonOmit<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};

// 官方示例  https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
type TotoTitle = ElonOmit<Todo, 'description' | 'completed'>;

const todo2: TotoTitle = {
  title: 'Clean room',
};

/**
 *
 * @author ElonWu
 * @description Exclude 从联合类型 T 中去除子集后，剩余的联合类型
 *
 */
type ElonExclude<T, K> = T extends K ? never : T; // 当 T 为联合类型时，extends 关键字的执行会拆分全部类型

// 官方示例  https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers
type T0 = ElonExclude<'a' | 'b' | 'c', 'a'>;

/**
 *
 * @author ElonWu
 * @description Diff 和 Exclude 同理，寻找两个联合类型的差集
 *
 */
type ElonDiff<T, K> = T extends K ? never : T;

/**
 *
 * @author ElonWu
 * @description Extract 和 Diff 相反，寻找两个联合类型的交集
 *
 */
type ElonExtract<T, K> = T extends K ? T : never;
// 官方示例  https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union
type T1 = ElonExtract<'a' | 'b' | 'c', 'a' | 'c'>;

/**
 *
 * @author ElonWu
 * @description ReturnType 获取函数类型的返回值类型
 *
 */
type ElonReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// 官方示例  https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union
type returnType = ElonReturnType<() => number[]>;
