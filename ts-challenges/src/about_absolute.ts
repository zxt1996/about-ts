type NumberLike = number | string
type Absolute<T extends NumberLike> = `${T}` extends `-${infer N}` ? N : `${T}`

// 结果："531"
type result = Absolute<-531>