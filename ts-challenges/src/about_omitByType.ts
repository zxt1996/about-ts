// OmitByType是用来按照类型移除的

type OmitByType<T, U> = {
    [P in keyof T as U extends T[P] ? never : P]: T[P]
}

interface Model {
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }
  interface ModelOmitBoolean {
    name: string;
    count: number
  }
  
  // 结果：ModelOmitBoolean
  type result = OmitByType<Model, boolean>