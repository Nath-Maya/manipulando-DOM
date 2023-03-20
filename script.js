const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  //limpiar el input cuando se ingrese un dato.
  const task = document.querySelector("[data-task]");
  input.value="";

  //*Indicamos que el contenido se muestre en la siguiente etiqueta de html introducciendo el valor. 

  const content=
 ` <div>
  <i class="far fa-check-square icon"></i>
  <span class="task">${value}</span>
</div>
<i class="fas fa-trash-alt trashIcon icon"></i>`

//el value lo queremos insertar en una card, la cual tiene la variable task.
//con la propiedad innerHTML anexamos codigo html.

task.innerHTML = content;


  console.log(content);
};

console.log(btn);

btn.addEventListener("click", createTask);