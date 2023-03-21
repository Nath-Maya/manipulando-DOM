import checkComplete  from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

//*CREANDO TAREA

const createTask = (evento) => {
  evento.preventDefault(); //poner en blanco el campo de input
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li"); //creara un elemento
  task.classList.add("card"); //darle clase al elmento creado.
  input.value = " ";

//*AGREGANDO LOS ELEMENTOS HTML Y CLASES

//creando elementos en orden
  const taskContent = document.createElement('div');

  const titleTask = document.createElement('span'); //crear etiqueta span
  titleTask.classList.add('task'); //le creo una clase
  titleTask.innerText = value; //inserte texto de value
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);


  task.appendChild(taskContent);
  task.appendChild(deleteIcon());
  list.appendChild(task);

};

btn.addEventListener("click", createTask); //Cuando se haga click se crea una tarea

//Hacer que el content viva dentro de una //*funcion.

