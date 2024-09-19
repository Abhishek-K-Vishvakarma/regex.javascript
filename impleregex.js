function MYFUNCTION() {
  let input = document.getElementById("inp").value;
  let input1 = document.getElementById("put").value;
  let err = document.getElementById("err");
  let err1 = document.getElementById("err1");
  let mail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let pass = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%&])[a-zA-Z0-9@#$%&]{4,}$/;
  let valid = true;
  console.log(input.length + ":" + input1.length);
  if (!mail.test(input)) {
    err.innerText = "Invalid!, please enter right email";
    err.style.color = 'red';
    valid = false;
  } else {
    err.innerText = '';
  }
  if (!pass.test(input1)) {
    err1.innerText = "Invalid please rigth password";
    err1.style.color = 'red';
  } else if (input1.length < 5 || input1.length > 10) {
    err1.innerText = 'please weite 5 to 10 character!';
    valid = false;
  } else {
    err1.innerText = '';
  }
  return valid;
}

let btn = document.querySelector("#btn");
let allmode = 'light';
btn.addEventListener('click', () => {
  if (allmode == 'light') {
    allmode = 'dark';
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    allmode = 'light';
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
  console.log(allmode);
})
