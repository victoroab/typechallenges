type Push<T extends any[], K> = [...T, K]

type xz = Push<[1, 2], '3'>
