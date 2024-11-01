// Log In form //
let signInForm = document.getElementById("signinform")
let userEmail = document.getElementById("useremail").value
let submitBtn = document.getElementById("submit-button")

signInForm.addEventListener("submit" , function(e){
    e.preventDefault()

    let localUser = localStorage.getItem("email")
    let userEmail = document.getElementById("useremail").value
    

    if(localUser == userEmail){
        alert("Congratulation!")
        // window.location.href = "./index.html"
    } else {
        alert("email not found")

    }
})