// DeepReadonly用来将一个嵌套对象类型中所有字段全部添加readonly关键词

// T[P] extends { [key: string]: any }：这段表示T[P]是否是一个包含索引签名的字段，如果包含我们认为它是一个嵌套对象，就可以递归调用DeepReadonly
type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends { [key: string]: any } ? DeepReadonly<T[P]> : T[P]
}

// 类型：
type X = {
    b: string
    c: {
      d: boolean
      e: undefined,
      f: null
    }
  }
  // 结果：
  type Y = {
    readonly b: string
    readonly c: {
      readonly d: boolean
      readonly e: undefined,
      readonly f: null
    }
  }