// Chainable是用来让一个对象可以进行链式调用的

// {[k in K]: V}：每次调用options时，把key/value构造成一个对象，例如：{ foo: 123 }。
// T & U：此处使用到&关键词，用来合并T和U两个对象中的所有key。
// Chainable<>：递归调用Chainable，赋予新对象以链式调用的能力
type Chainable<T> = {
    options<K extends string, V>(key: K, value: V): Chainable<T & {[k in K]: V}>
    get(): T
}

type Expected = {
    foo: number
    bar: {
      value: string
    }
    name: string
  }
  declare const obj: Chainable<{}>
  // 结果：Expected
  const result = obj
    .options('foo', 123)
    .options('bar', { value: 'Hello' })
    .options('name', 'TypeScript')
    .get()