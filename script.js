let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);


let username = id("username"),
 email = id("email"),
 password = id("password"),
 form = id("form"),
 errorMessage = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) =>{
     e.preventDefault();
     validateForm(username,0,"User-name cannot be blank")
    validateForm(email,1,"Email canot be blank");
    validateForm(password, 2, "Password cannot be blank");

})

let validateForm = (id,serial,message) =>{
     if(id.value.trim() === ''){
          errorMessage[serial].innerHTML = message;
          failureIcon[serial].style.opacity = "1"
          successIcon[serial].style.opacity = "0"
     }
     else{
          errorMessage[serial].innerHTML = "";
          failureIcon[serial].style.opacity = "0"
          successIcon[serial].style.opacity = "1"
     }
}



