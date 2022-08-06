// ALlCombitation是用来列举全部排列组合可能性的

// 将字符串中的每个值使用 | 组合成联合类型
type MyStringToUnion<S extends string> = 
    S extends `${infer C}${infer R}`
    ? C | MyStringToUnion<R>
    : never


type AllCombinations<
    S extends string,
    U extends string = MyStringToUnion<S>
> = [U] extends [never]
    ? ''
    : '' | {[K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}`}[U]

/*
  使用示例：
  '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' 
  | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
*/
type AllCombinations_ABC = AllCombinations<'ABC'>;