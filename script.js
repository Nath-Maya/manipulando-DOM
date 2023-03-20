
const btn = document.querySelector("[data-form-btn]");


//Listener: escuchar un evento. //*Evento / Elemento que recibira el evento / lo que secedera cuando el evento sea realizado
//objeto.addEventListener("evento", function (parametros) {lo que queremos que haga})


btn.addEventListener("click", function (evento) {
  evento.preventDefault();
  const input = document.querySelector("[data-form-imput]");
  //le indico que imprima el valor del input. 
  console.log(input.value);
});