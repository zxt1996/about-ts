
type Curry<P, R> = 
    P extends []
        ? () => R
        : P extends [infer First, ...infer Rest]
            ? (a: First) => Rest['length'] extends 0 ? R : Curry<Rest, R>
            : R

declare function Currying<F>(fn: F): F extends (...args: infer P) => infer R ? Curry<P, R> : never

const func = Currying((a: number, b: string, c: boolean) => true)
// (a: string) => (a: number) => (a: boolean) => true
type funcType = typeof func