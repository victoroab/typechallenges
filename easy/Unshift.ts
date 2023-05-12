type Unshift<T extends any[], K> = [K, ...T]

type cx = Unshift<[1, 2], 0>
