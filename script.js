const todos = []

const todosContainer = document.querySelector('.container');
const addTodoItemElement = document.querySelector('.add-todo-item');
//debugger
function createTodoItemElement(value) {
  const li = document.createElement('li'); // creating li HTML element
  li.classList = 'item'; // adding the .item class to the li class list
  const deleteButton = createButtonElement(
    'Delete', // creating delete button name text node
    () => {console.log('deleting')}
  ) // creating delete button
  li.appendChild(document.createTextNode(value));
  li.appendChild(deleteButton); // appending delete button to li as child
  return li // return the li
}
/**
 * Creates a HTML button element depends on its parameters
 * @param {string} value - the value of the button
 * @param {function} onClick - the onClick function of the button
 */
function createButtonElement(value, onClick) {  
  const button = document.createElement('button'); // creating button HTML element
  button.appendChild(document.createTextNode(value)); // appending the value to the button as child  
  button.onclick = onClick // appending onClick function to the button
  todos.pop()
  return button; // return the button
}
/**
 * 
 * @param {string} value - the value of the button
 * @param {HTMLElement} parent - the HTML element wrapper parent
 * @param {function} createButton - button creator function
 */
function createAddTodoButtonElement(
  value, 
  parent, 
  createButtonFc
) {
  const addButtonElement = createButtonFc(value, addTodoItem);
  parent.appendChild(addButtonElement)
}
function deleteOrAdd(){
  if(value=="Add Todo") return addTodoItem();
  return deleteTodoItem();
};
function addTodoItem(value, data) { 
  //debugger
  const inputText= document.getElementById("input").value;
  console.log(inputText)
  todos.push(inputText);
  console.log(todos)
  renderTodoList(todos);
}
function deleteTodoItem(value, data) { 
  const inputText= document.getElementById("input").innerText;
  todos.push(inputText); 
}
function renderTodoList(data) {
  data.forEach(todo => {
    todosContainer.appendChild(
      createTodoItemElement(todo)
    );
  })
}

createAddTodoButtonElement(
  'Add Todo', 
  addTodoItemElement, 
  createButtonElement
);
