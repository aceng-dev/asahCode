document.addEventListener('DOMContentLoaded', function () {
    const submitForm = document.getElementById('form');
    const todos = [];
    const renderEvent = 'render-todo';
  submitForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo();
    submitForm.reset();
});
function addTodo(){
    const textTodo = document.getElementById('title').value;
    const dateTodo = document.getElementById('date').value;

    function generateID(){
        return +new Date();
    }
    function generateObject(id, task, timeStamp, isCompleted){
        return{
            id,
            task,
            timeStamp,
            isCompleted
        } 
    }
    const createID = generateID();
    const createObject = generateObject(createID, textTodo, dateTodo, false);
    todos.push(createObject);

    document.dispatchEvent(new Event(renderEvent));

};
function findTodo(todoId) {
  for (const todoItem of todos) {
    if (todoItem.id === todoId) {
      return todoItem;
    }
  }
  return null;  
}
function addTaskToCompleted (todoId) {
  const todoTarget = findTodo(todoId);

  if (todoTarget == null) return;

  todoTarget.isCompleted = true;
  document.dispatchEvent(new Event(renderEvent));
}
function undoTaskFromCompleted(todoId){
    const todoTarget = findTodo(todoId);

    if(todoTarget == null) return;
    
    todoTarget.isCompleted = false;
    document.dispatchEvent(new Event(renderEvent));
}
function removeTaskFromCompleted(todoId){
const todoTarget = findTodo(todoId);

if(todoId === -1) return;
todos.splice(todoTarget,1);
document.dispatchEvent(new Event(renderEvent));

}
function makeTodo(todoObject) {
  const textTitle = document.createElement('h2');
  textTitle.innerText = todoObject.task;
 
  const textTimestamp = document.createElement('p');
  textTimestamp.innerText = todoObject.timeStamp;
 
  const textContainer = document.createElement('div');
  textContainer.classList.add('inner');
  textContainer.append(textTitle, textTimestamp);
 
  const container = document.createElement('div');
  container.classList.add('item', 'shadow');
  container.append(textContainer);
  container.setAttribute('id', `todo-${todoObject.id}`);
  if (todoObject.isCompleted) {
    const undoButton = document.createElement('button');
    undoButton.classList.add('undo-button');
 
    undoButton.addEventListener('click', function () {
      undoTaskFromCompleted(todoObject.id);
    });
 
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');
 
    trashButton.addEventListener('click', function () {
      removeTaskFromCompleted(todoObject.id);
    });
 
    container.append(undoButton, trashButton);
  } else {
    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button');
    
    checkButton.addEventListener('click', function () {
      addTaskToCompleted(todoObject.id);
    });
    
    container.append(checkButton);
  } 
  return container;
}
document.addEventListener(renderEvent, function(){
    console.log(todos);
    const uncompletedTodo = document.getElementById('todos');
    uncompletedTodo.innerHTML = '';

    const completedTodo = document.getElementById('completed-todos');
    completedTodo.innerHTML = '';
    for(const todoItem of todos){
        const todoElement = makeTodo(todoItem);
     if(!todoItem.isCompleted){
        uncompletedTodo.append(todoElement);
    }else{
        completedTodo.append(todoElement);
    }
        
    }
})

});
