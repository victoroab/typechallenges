type First<T> = T extends any[] ? [...T][0] : never

type arr2 = ['a', 'b', 'c']
type Sec = First<arr2>
