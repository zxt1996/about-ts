// PromiseAll是用来取Promise.all()函数所有返回的类型
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
    [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P]
}>

// 结果：Promise<[number, number, number]>
const result = PromiseAll([1, 2, Promise.resolve(3)]);


const tuple = ['你好', '元组', 17] as const
//    ^^^^^ = readonly ["你好", "元组", 17]


type TuplePromise<T> = {
    [K in keyof T]: Promise<T[K]>
}
type T1 = TuplePromise<typeof tuple>
//   ^^ = readonly [Promise<"你好">, Promise<"元组">, Promise<17>]


type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type fn = () => number
type fnReturnType = ReturnType<fn> // number

// promise 响应类型
type PromiseResType<T> = T extends Promise<infer R> ? R : T

// 验证
async function strPromise() {
  return 'string promise'
}

interface Person {
  name: string;
  age: number;
}
async function personPromise() {
  return {
    name: 'p',
    age: 12
  } as Person
}

type StrPromise = ReturnType<typeof strPromise> // Promise<string>
// 反解
type StrPromiseRes = PromiseResType<StrPromise> // str

type PersonPromise = ReturnType<typeof personPromise> // Promise<Person>
// 反解
type PersonPromiseRes = PromiseResType<PersonPromise> // Person