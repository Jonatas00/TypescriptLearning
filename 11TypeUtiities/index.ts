//Type Utilities

type Todo = {
  title: string;
  description: string;
  completed: boolean;
}

const todo: Readonly<Todo> = {
  title: "Terminar Star Wars",
  description: "Assistir o episóidio 4 em diante",
  completed: false,
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, { completed: true })

console.log(todo2);

// Pick
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
  title: "Zerar Hollow Night",
  completed: false
}
console.log("Todo 3")
console.log(todo3)
// Omit

type TodoPreview2 = Omit<Todo, "description">
const todo4: TodoPreview = {
  title: "Zerar Hollow Night",
  completed: false
}
console.log("Todo 4")
console.log(todo4)