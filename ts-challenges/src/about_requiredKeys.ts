// RequiredKeys是用来返回一个类型中所有必填字段

// {} extends {id:number} ? true : false 会返回 false ,因为id是必选属性，而 {} 对象中没有
// {} extends {id?:number} ? true : false 会返回 true ，因为id是可选属性，空对象也能赋值
// {} extends Pick<T, K> ? never : K ,如果T[K]是可选属性则返回never,否则返回K
// -? 是让可选属性变成必选，不然 ，K?:neverK前面有个 ? TS会将其变成 K?:never|undefined ，这样子[keyof T]取出的值就含有undefined ,所以要加上 -? 
type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

// T[keyof T]：keyof T得到所有的属性，然后根据属性取其类型

// keyof T的结果
// type P = 'name' | 'age' | 'sex' | 'address'
// T[P]的结果，类型为never自动过滤
// type result = 'name' | 'age' | never | never => 'name' | 'age'

type Person = {
    name: string;
    age: number;
    sex?: undefined;
    address?: string;
  }
  
  // 结果：'name' | 'age'
  type result = RequiredKeys<Person>