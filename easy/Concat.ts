type Concat<L extends any[], R extends any[]> = [...L, ...R]
type left = ['A', 'B']
type right = ['C', 'D']

type together = Concat<left, right>
