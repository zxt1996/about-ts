// 柯里化
let addCurrying = (x: number) => (y: number) => x + y;

addCurrying(123)(456);

let addOne = addCurrying(123);
addOne(456);