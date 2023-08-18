//boolean (true/ false)
let isOpen: boolean
isOpen = true;

//string ('foo', "foo", `foo`)
let message: string
message = "foo"

//number (int, float, hex, binary)
let total: number
total = 20

//array - type[]
let items: number[]
items = [1, 2, 3, 4, 5, 6]

let tot: Array<number>
tot = [1, 2, 3]

//tuple
let title: [number, string, string]
title = [1, "Titulo", "Desc"]

//enum
enum Colors {
  white = "#fff",
  black = "#000"
}

//any - literalmente qualquer coisa
let coisa: any
coisa = true

//void (vazio)
function logger(): void {
  console.log("foo")
}

//null / undefined
type Bla = string | undefined

//never - nunca retorna
function error(): never{
  throw new Error("Deu erro")
}

//object
let cart: object

cart = {
  key: "Foo",
  value: "Foo"
}