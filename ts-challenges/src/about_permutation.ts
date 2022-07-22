// Permutation是用来将联合类型中的每一个类型进行排列组合

type MyExclude<T, U> = T extends U ? never : T

// 结果：'name'|'age'
type ExcludeResult = Exclude<'name'|'age'|'sex', 'sex'|'address'>

// 给定另一个泛型：U。初始值设置为 T，用来保存 T 之前的内容
// [T] extends [never]：这段代码主要是为了处理联合类型为空的情况
// 在 T extends U 中，U 代表传入的联合类型，例如：'A' | 'B' | 'C'；T 则代表继承 U 的某个值，例如："A" 或 "B" 或 "C"
// <Exclude<U, T>：因为此时的T代表当前迭代的类型，所以我们从原始联合类型中排除当前类型，然后递归调用Permutation。
// 当T为A时，递归调用Permutation<'B' | 'C'>, 此时结果为['A'] + ['B', 'C'] 或 ['A'] + ['C', 'B']
type Permutation<T, U = T> = 
    [T] extends [never]  
        ? []
        : T extends U  
            ? [T, ...Permutation<Exclude<U, T>>]
            : never


type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']


// 为什么要使用 [T] extends [never] 而不是直接使用 T extends never 来做判断

// never 是所有类型的子类型
type p1 = never extends "x" ? string : number // string


// 因为 never 被认为是空的联合类型，也就是说，没有联合项的联合类型，所以还是满足上面的分配律。
// 然而因为没有联合项可以分配，所以 P 的表达式其实根本就没有执行，所以 p2 的定义也就类似于永远没有返回的函数一样，是 never 类型的
type P<T> = T extends "x" ? string : number
type p2 = P<never> // never

// 防止条件判断中的分配
// 在条件判断类型的定义中，将泛型参数使用 [] 括起来，即可阻断条件判断类型的分配。此时，传入参数 T 的类型将被当作一个整体，不再分配
type P<T> = [T] extends ["x"] ? string : number
type p1 = P<"x" | "y"> // number
type p2 = P<never> // string