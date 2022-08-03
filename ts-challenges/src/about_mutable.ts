// Mutable是用来让所有属性变为可改的(移除readonly关键词)

// -readonly：表示把readonly关键词去掉，去掉之后此字段变为可改的
type MyMutable<T> = {
    -readonly [P in keyof T]: T[P]
}

type Person = {
    readonly name: string;
    age: number;
  }
  // 结果：{ name: string; age: number; }
  type MutableResult = MyMutable<Person>