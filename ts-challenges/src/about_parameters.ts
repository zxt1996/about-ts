// Parameters是用来获取一个函数的参数类型的，其中获取的结果是一个元组
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer R) => any ? R : never;

const add = (a: number, b: string): void => {}
// [number, string]
type result = MyParameters<typeof add>