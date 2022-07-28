type IsUnion<T, U = T> = T extends U
    ? [U] extends [T]
        ? false
        : true
    : never

type I0 = IsUnion<string|number> // true
type I1 = IsUnion<string|never> // false
type I2 =IsUnion<string|unknown> // false
type result2 = IsUnion<string> // false


//假设输入的是联合类型
// A extends A
// 如果 A 是 1 | 2，分发结果是：
// (1 extends 1 | 2) | (2 extends 1 | 2)
// 第一个 A 在两次值分别为 1 与 2，而第二个 A 在两次执行中每次都是 1 | 2

// 利用包裹 [] 不分发的特性，即在分发后，由于在每次执行过程中，
// 第一个 A 都是联合类型的某一项，因此用 [] 包裹后必然与原始值不相等，
// 所以我们在 extends 分发过程中，再用 [] 包裹 extends 一次，如果此时匹配不上，说明产生了分发

// [U] extends [T] 因为 T 在前面已经展开了,所以我们要把[U]放前面，
// [a]  extends [a|b]，[b] extends [a | b]
// 所以，当为联合类型时，判断不通过返回 true
