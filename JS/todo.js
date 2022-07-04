const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

//functions
//save todo list in the localStorage
const saveToDos = () => {
  localStorage.setItem("todos", JSON.stringify(toDos));
};

//delete todo item and save the filtered todo list again in the localStorage so that it's deleted from the localStorage.
const deleteToDo = (e) => {
  e.preventDefault();
  const targetedLi = e.target.parentElement;
  targetedLi.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(targetedLi.id)); //update toDos to save filtered ToDos in the localStorage
  saveToDos();
};

//display todo list on the browser
function paintToDo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  const btn = document.createElement("button");
  span.innerText = `- ${todo.text}`;
  btn.innerText = "❌";
  btn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.append(li);
}

//when submitting
const toDoFormHandler = (e) => {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
};

toDoForm.addEventListener("submit", toDoFormHandler);

//to get the data as JS can read
const savedAndParsedToDos = JSON.parse(localStorage.getItem("todos"));

if (savedAndParsedToDos !== null) {
  toDos = savedAndParsedToDos;
  savedAndParsedToDos.forEach((item) => {
    paintToDo(item);
  });
}
