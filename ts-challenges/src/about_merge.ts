// Merge是用来合并两个类型，如果有重复的字段类型，则第二个的字段类型覆盖第一个的

type Merge<F, S> = {
    // keyof F | keyof S：这段代码的含义是将F和S这两个对象的键组合成一个新的联合类型
    [P in keyof F | keyof S]: P extends keyof S ? S[P] : P extends keyof F ? F[P] : never
}


type Foo = {
    a: number;
    b: string;
  }
  type Bar = {
    b: number;
    c: boolean;
  }
  
  // 结果：{ a: number; b: number; c: boolean; }
  type result = Merge<Foo, Bar>