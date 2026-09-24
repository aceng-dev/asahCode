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
document.addEventListener(renderEvent, function(){
    console.log(todos)
})
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
 
  return container;
}

});
