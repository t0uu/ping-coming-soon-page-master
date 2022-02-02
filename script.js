const btn = document.getElementById('btn');
const form = document.getElementById('form');
const email = document.getElementById('email');





form.addEventListener('submit', e =>{
    e.preventDefault();

    validate();
})


//*regex: https://regexr.com/3e48o
//la i al final es insensitive: no distingue mayusculas y minusculas
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

const validate = () => {
const mail = email.value.trim();



let errorMessage = "Please provide a valid email address";
let succesMessage = 'Your email is valid'
if(email === ""){
} else if (!emailRegex.test(mail)) {
    inputError(email, errorMessage);
  } else {
    inputSucess(email, succesMessage);
  }
} 


const inputError = (input, message) => {
    const inputParent = input.parentElement;

    const small = inputParent.querySelector('small');
    inputParent.classList.add('error');
    inputParent.classList.remove("success");
    small.innerHTML = message;
    small.classList.add("error");
}
const inputSucess = (input,message) => {
    const inputParent = input.parentElement;
    // con querySelector nos va a agarrar el primero en que la etiqueta coincida. Si fuera querySelectorAll, nos agarraria todos
    const small = inputParent.querySelector("small");
    inputParent.classList.add("success");
    inputParent.classList.remove("error");
    small.innerHTML = message;
    small.classList.add('success');
  };