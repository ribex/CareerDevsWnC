var todoList = {
  todos: ["Item 1", "This will be deleted", "Item 3"],
  displayTodos: function() {
    console.log('My todos:', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, changedTodo) {
    this.todos[position] = changedTodo;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};

todoList.addTodo("This is the final third todo");
todoList.changeTodo(2, "The final second todo");
todoList.deleteTodo(1);