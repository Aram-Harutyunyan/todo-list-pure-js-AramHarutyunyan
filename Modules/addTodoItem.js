export function addTodoItem() { 
    const inputText= document.getElementById("input").value;
    if(inputText!==""){
    todos.push(inputText);
    renderTodoList(todos);
    }
  }