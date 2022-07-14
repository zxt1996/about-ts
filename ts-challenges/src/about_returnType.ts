// ReturnType<T>是用来获取一个函数的返回类型的

// T extends (...args: any) => infer R：判断T类型是否是一个函数的子类型，既T是不是一个函数
// infer R：表示待推导的函数返回类型为R，后续可以在表达式中使用R来代替真正的返回类型
type MyReturnType<T> = T extends (...args: any) => infer R ? R : never;

function getRandom (): number {
    return Math.random()
  }
  // 结果：number
  type result = MyReturnType<typeof getRandom>