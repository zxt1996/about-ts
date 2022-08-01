// RemoveIndexSignature是用来移除一个类型中的索引签名的

type NeverIndex<P> = string extends P ? never : number extends P ? never : P
type RemoveIndexSignature<T> = {
    [P in keyof T as NeverIndex<P>]: T[P]
}

type Foo = {
    [key: string]: any;
    foo(): void;
  }
  
  // 结果：{ foo(): void; }
  type result = RemoveIndexSignature<Foo>