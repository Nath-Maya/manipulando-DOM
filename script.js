const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
  evento.preventDefault(); //poner en blanco el campo de input
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li"); //creara un elemento
  task.classList.add("card"); //darle clase al elmento creado.
  input.value = " ";

console.log(checkComplete());
//creando elementos en orden
  const taskContent = document.createElement('div');

  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);


  const content = `
<i class="fas fa-trash-alt trashIcon icon"></i>`;

  //el value lo queremos insertar en una card, la cual tiene la variable task.
  //con la propiedad innerHTML anexamos codigo html.

  //! task.innerHTML = content;

  task.appendChild(taskContent);


  //agregar un hijo a un elemento padre

  list.appendChild(task);

  console.log(content);
};

console.log(btn);

btn.addEventListener("click", createTask);

//Hacer que el content viva dentro de una //*funcion.

const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far");
  i.classList.add("fa-check-square");
  i.classList.add("icon");
  
  return i
};
