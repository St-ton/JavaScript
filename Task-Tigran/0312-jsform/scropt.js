let form = document.querySelector('.form1');

form.onsubmit = event => {
  event.preventDefault();
  let formData = new FormData(event.target);
  let { email, password } = Object.fromEntries(formData);
  console.log(email);
  console.log(password);
  console.log(Object.fromEntries(formData));
};
