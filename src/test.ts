const foo = (bar: string): string => {
  return 'Hello, ' + bar
}

let baz: string = 'there!'

console.log(foo(baz))