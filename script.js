//!Para evitar que el usuario vea el codigo de JS se debe encerrar en una funcion. 
//*immediately invoked function

(() => {

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


  const content = `
<i class="fas fa-trash-alt trashIcon icon"></i>`;

  task.appendChild(taskContent);
  list.appendChild(task);

};

btn.addEventListener("click", createTask); //Cuando se haga click se crea una tarea

//Hacer que el content viva dentro de una //*funcion.

const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far","fa-check-square","icon");
  addEventListener('click' , taskComplete);//cuando escuche el evento click haga la funcion de taskcomplete

  return i
};

//*CONCLUIR TAREA

const taskComplete = (event) => {
const element = event.target;
element.classList.toggle('fas');
element.classList.toggle(completeIcon);
element.classList.toggle('far'); //elimino una clase
}
// .remove es para remover // .toggle es para verificar si existe lo coloco si no no . 

})();