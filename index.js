function add() {
  let todoesDiv = document.querySelector(".todoes");

  let inputValue = document.querySelector(".todoInp").value;

  let todo = document.createElement("div");
  todo = todoesDiv.appendChild(todo);
  todo.className = "todo";

  let todoText = document.createElement("h3");
  todoText = todo.appendChild(todoText);
  todoText.innerHTML = inputValue;
  todoText.className = "todoText";
  todoText.addEventListener("click", (e) => {
    checked(e);

    if (e.target.classList.length === 1) {
      checkImg.src = "./img/unchecked.png";
      todoText.style.textDecoration = "none";
      todoText.style.color = "black";
    } else if (e.target.classList.length === 2) {
      checkImg.src = "./img/checked.png";
      todoText.style.textDecoration = "line-through";
      todoText.style.color = "rgb(211,211,211)";
    }
  });

  let checkImg = document.createElement("img");
  checkImg = todo.appendChild(checkImg);
  checkImg.className = "checkImg";
  checkImg.src = "./img/unchecked.png";
  checkImg.addEventListener("click", (e) => {
    checked(e);

    if (e.target.classList.length === 1) {
      checkImg.src = "./img/unchecked.png";
      todoText.style.textDecoration = "none";
      todoText.style.color = "black";
    } else if (e.target.classList.length === 2) {
      checkImg.src = "./img/checked.png";
      todoText.style.textDecoration = "line-through";
      todoText.style.color = "rgb(211,211,211)";
    }
  });

  let deleteSpan = document.createElement("span");
  deleteSpan.innerHTML = "x";
  deleteSpan = todo.appendChild(deleteSpan);
  deleteSpan.className = "delete";
  deleteSpan.addEventListener("click", (e) => deleteTodo(e));

  document.querySelector(".todoInp").value = "";
}

function deleteTodo(e) {
  e.target.parentElement.remove();
}

function checked(e) {
  e.target.classList.toggle("checked");
}
