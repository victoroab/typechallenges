type If<C extends boolean, T extends string, F extends string> = C extends true
  ? T
  : F

type A = If<false, 'a', 'b'>
