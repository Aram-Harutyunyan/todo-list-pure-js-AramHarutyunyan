export function addTodoItem() { 
    console.log(todos)
    const inputText= document.getElementById("input").value;
    if(inputText!==""){
    todos.push(inputText);
    renderTodoList(todos);
    }
  }