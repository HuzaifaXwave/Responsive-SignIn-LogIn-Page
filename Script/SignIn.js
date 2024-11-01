// Sign In form //
let signUpForm = document.getElementById("signupform")
let submitBtn = document.getElementById("submit-button")

signUpForm.addEventListener("submit" , function(e){
    e.preventDefault()

    let userEmail = document.getElementById("useremail").value

    if(userEmail){
        localStorage.setItem("email" , userEmail)

        alert("done")
        window.location.href = "../LogIn.html"
        
    }

    
})