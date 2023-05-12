/* type dong = {foo: 1, bar: 0} 
   [P in keyof dong] = foo | bar 


   type dong2 = foo | bar
   [P in dong2] = foo | bar

   When working with mapped types, 
   "Property in keyof Type" is for object types,
   "Property in Type" is for literal types. 
*/

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

type MyPick2<T extends string, K extends T> = K
type heavy = 'mello' | 'hello'
type ccf = MyPick2<heavy, 'hello'>
