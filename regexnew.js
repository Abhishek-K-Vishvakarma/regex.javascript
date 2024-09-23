function ValidPattern(data){
  let inp = document.getElementById("inp").value;
  console.log(inp);
  let error = document.getElementById("error");
  let pattern = /^[a-z0-9]+[@]+[a-z]+[.]+[a-z]+$/;   // vish019@gmail.com
  let pattern1 = /^[a-z]+[.+_+-]+[@]+[a-z]+[.]+[a-z]+$/;  // vish./_/-@gmail.com
  if(pattern.test(data) || pattern1.test(data)){
    error.innerText = 'Valid Cradintail!';
    error.style.color = 'red';
  }else{
    error.innerText = 'Invalid Cradintail!';
    error.style.color = 'red';
  }
}