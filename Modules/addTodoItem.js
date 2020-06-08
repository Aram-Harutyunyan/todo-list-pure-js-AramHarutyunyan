export function addTodoItem(todos, renderTodoList) { 
    const inputText= document.getElementById("input").value;
    if(inputText!==""){
        console.log(todos)
    todos.push(inputText);
    

    renderTodoList(todos);
    }
}