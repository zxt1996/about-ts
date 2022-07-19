// LookUp是用来根据类型值查找类型的

// U extends { type: string; }：这段代码限制U的类型必须是具有属性为type的对象
type LookUp<
    U extends { type: string; },
    T extends string
> = U extends { type: T } ? U : never

interface Cat {
    type: 'cat'
    color: 'black' | 'orange' | 'gray'
  }
  interface Dog {
    type: 'dog'
    color: 'white'
    name: 'wang'
  }
  
  // 结果：Dog
  type result = LookUp<Cat | Dog, 'dog'>