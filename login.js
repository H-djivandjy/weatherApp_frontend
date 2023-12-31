// Insert your code here

//! --------> Signup
document.querySelector('#register').addEventListener('click', function(){
    const user = {
        name : document.querySelector("#registerName").value,
        email : document.querySelector("#registerEmail").value,
        password : document.querySelector("#registerPassword").value,
    }
    
    // fetch('http://localhost:3000/users/signup', {
    fetch('https://weather-app-backend-three.vercel.app/users/signup', {
        method: "POST",
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data =>{
        if (data.result) {
            window.location.assign('index.html')
        }
    })
})


//! --------> Signin
document.querySelector('#connection').addEventListener('click', function(){
    const user = {
        email : document.querySelector("#registerEmail").value,
        password : document.querySelector("#registerPassword").value,
    }
    
    // fetch('http://localhost:3000/users/signin', {
    fetch('https://weather-app-backend-three.vercel.app/users/signin', {
        method: "POST",
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data =>{
        if (data.result) {
            window.location.assign('index.html')
        }
    })
})