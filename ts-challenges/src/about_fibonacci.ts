// Fibonacci是用来实现菲波那切数列的
// 菲波那切数列：1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144..

type Fibonacci<
    T extends number,
    Index extends any[] = [1],
    Prev extends any[] = [],
    Current extends any[] = [1]
> = Index['length'] extends T
    ? Current['length']
    : Fibonacci<T, [...Index, 1], Current, [...Prev, ...Current]>


type Result1 = Fibonacci<3> // 2
type Result2 = Fibonacci<8> // 21
