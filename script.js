const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  input.value="";
  console.log(value);
};

console.log(btn);

btn.addEventListener("click", createTask);