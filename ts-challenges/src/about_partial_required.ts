// Partial和Required一个是让所有属性可填、另外一个是让所有属性必填

type MyPartial<T> = {
    [P in keyof T]?: T[P]
}

type MyRequired<T> = {
    [P in keyof T]-?: T[P]
}

type Person = {
    name: string;
    age?: number;
  }
  
  // 结果: { name?: string; age?: number; }
  type PartialResult = MyPartial<Person>
  
  // 结果: { name: string; age: number; }
  type RequiredResult = MyRequired<Person> 