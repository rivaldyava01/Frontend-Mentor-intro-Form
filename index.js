//init
function validationForm() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    let emptyFirstName = document.getElementById("emptyFirstName")
    let emptyLastName = document.getElementById("emptyLastName")
    let emptyEmail = document.getElementById("emptyEmail")
    let emptyPass = document.getElementById("emptyPass")
    let errorFirstName = document.getElementById("errorFirstName")
    let errorLastName= document.getElementById("errorLastName")
    let errorEmail = document.getElementById("errorEmail")
    let errorPass = document.getElementById("errorPass")
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    //firstName
    if(firstName.value==""){
      emptyFirstName.innerHTML = "First Name cannot be empty";
      firstName.style.border = "solid hsl(0, 100%, 74%)";
      errorFirstName.style.display = "inline"
    }
    else{
      emptyFirstName.innerHTML="";
      firstName.style.border = "solid"
      errorFirstName.style.display = "none"
  
    }
  
    //LastName
    if(lastName.value==""){
      emptyLastName.innerHTML = "Last Name cannot be empty";
      lastName.style.border = "solid hsl(0, 100%, 74%)"
      errorLastName.style.display = "inline"
    }
    else{
      emptyLastName.innerHTML="";
      lastName.style.border = "solid"
      errorLastName.style.display = "none"
    }
  
  
    //email
    if(email.value==""){
      emptyEmail.innerHTML = "Email cannot be empty";
      email.style.border = "solid hsl(0, 100%, 74%)"
      errorEmail.style.display = "inline"
    }
    else if(!validRegex.test(email.value)){
      emptyEmail.innerHTML = "looks like this is not email";
      email.style.border = "solid hsl(0, 100%, 74%)"
      errorEmail.style.display = "inline"
      email.style.color = "hsl(0, 100%, 74%)"
    }
    else{
      emptyEmail.innerHTML="";
      email.style.border = "solid"
      errorEmail.style.display = "none"
      email.style.color = "black"
    }
  
  
    //password
    if(pass.value==""){
      emptyPass.innerHTML = "Password cannot be empty";
      pass.style.border = "solid hsl(0, 100%, 74%)"
      errorPass.style.display = "inline"
    }
    else{
      emptyPass.innerHTML="";
      pass.style.border = "solid"
      errorPass.style.display = "none"
    }
  }