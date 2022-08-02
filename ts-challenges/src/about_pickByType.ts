// PickByType是用来根据类型选取属性的

type PickByType<T, U> = {
    [P in keyof T as T[P] extends U ? P : never]: T[P]
}

interface Model {
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }
  // 结果：{ isReadonly: boolean, isEnable: boolean }
  type result = PickByType<Model, boolean>