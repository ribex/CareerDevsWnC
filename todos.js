var todos = ["Item 1", "This will be deleted", "Item 3"];

function displayTodos() {
    console.log(todos);
}

function addTodos(newTodo) {
    todos.push(newTodo);
    console.log("Todos: " + todos);
}

function changeTodo(indexOfTodo, changedTodo) {
    todos[indexOfTodo] = changedTodo;
    console.log("Todos: " + todos);
}

function deleteTodo(indexOfTodo) {
    todos.splice(indexOfTodo, 1);
    console.log("Todos: " + todos);    
}

addTodos("This is the final third todo");
changeTodo(2, "The final second todo");
deleteTodo(1);