// Se recomienda utilizar data atributes en las etiquetas para llamar un objeto. Ya que las clases las podemos modificar en el transcurso del trabajo

//Los data atributes se llaman dentro del query con comillas y corchetes "[data]"

const btn = document.querySelector("[data-form-btn]");


//Listener: escuchar un evento. //*Evento / Elemento que recibira el evento / lo que secedera cuando el evento sea realizado
//objeto.addEventListener("evento", function (parametros) {lo que queremos que haga})


btn.addEventListener("click", function (evento) {
  evento.preventDefault();
  const input = document.querySelector("[data-form-imput]");
  //le indico que imprima el valor del input. 
  console.log(input.value);
});

//!Arrow  funtions o funciones anonimas

const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  console.log(input.value);
};

console.log(btn);

btn.addEventListener("click", createTask);