var todos = ["Item 1", "This will be deleted", "Item 3"];

// Display the todos
function displayTodos() {
    console.log("Todos: " + todos);
}

// Add a new todo to the end of the array
function addTodos(newTodo) {
    todos.push(newTodo);
    displayTodos();
}

// Change an existing todo using the position in the array (index)
function changeTodo(indexOfTodo, changedTodo) {
    todos[indexOfTodo] = changedTodo;
    displayTodos();
}

// Delete a single todo using its index in the array
function deleteTodo(indexOfTodo) {
    todos.splice(indexOfTodo, 1);
    displayTodos();    
}

addTodos("This is the final third todo");
changeTodo(2, "The final second todo");
deleteTodo(1);