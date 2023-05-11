const eat = (food: string) => {
  return `Eat ${food}`
}

type Result = boolean extends true ? 1 : 0
// if boolean is the same type as true, then return 1, else return 0

const func = (check: boolean) => {
  return '93718013013'
}

const whatever = {}

type FuncResult = ReturnType<typeof func>

// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type FakeReturnType<T> = T extends ((...args: any) => infer R extends string)
  ? `${R}_return_type`
  : never

type GetFromDeepObject<T> = T extends
  | {
      a: {
        b: {
          c: infer C
        }
      }
    }
  | {
      c: infer C
    }
  | {
      a: {
        c: infer C
      }
    }
  ? C
  : never

type c = GetFromDeepObject<{
  a: {
    c: boolean
  }
}>

// const str = `hello_world-friend`.replace(/(_|-)/g, (item) => {
//   return `${item}${item}${item}`
// })

type Result2 = FakeReturnType<typeof func>
