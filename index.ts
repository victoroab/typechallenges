// type MappedTypeWithNewProperties<Type> = {
//   [Properties in keyof Type as string]: Type[Properties]
// }

// type Person = {
//   age: number
//   year: number
//   12: number
// }

// type NewPesonProps = MappedTypeWithNewProperties<Person>

// type CapitalizeKey<T> = {
//   [Properties in keyof T as `${Capitalize<string & Properties>}`]: T[Properties]
// }

// type Foo = 'hello'
// type Bar = Capitalize<Foo>

// type T0 = ReturnType<() => string>

// function foo() {
//   return { name: 'foo', address: 'bar' }
// }

// type T1 = ReturnType<typeof foo>
