// 不同于初级实现中的Readonly，在中级实现的Readonly中，如果我们传递了指定的字段，那么Readonly会表现为按需实现readonly

// K extends keyof T = keyof T：如要传递了K，那么只能是T中已经存在的属性，不存在则报错；
// 如果不传递，则默认值为keyof T，意味着全部属性都添加readonly。
// T & U：在本例中表示将T和U中的字段结合起来，如果没有&，那么就丢失一些属性，例如title
type Readonly<T, K extends keyof T = keyof T> = Omit<T, K> & {
    readonly [P in K]: T[P]
}

interface Todo {
    title: string;
    desc?: string;
    completed: boolean;
  }
  interface Expected1 {
    readonly title: string;
    readonly desc?: string;
    readonly completed: boolean;
  }
  interface Expected2 {
    title: string;
    readonly desc?: string;
    readonly completed: boolean;
  }
  
  // 结果：Expected1
  type ReadonlyResult1 = Readonly<Todo>
  // 结果：Expected2
  type ReadonlyResult2 = Readonly<Todo, 'desc'|'completed'>
  
  // 测试：
  const obj: ReadonlyResult2 = {
    title: 'AAA',
    desc: '23',
    completed: true
  }
  obj.title = 'aaa'
  obj.desc = '32' // error
  obj.completed = false // error