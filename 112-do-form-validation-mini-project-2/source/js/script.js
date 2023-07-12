let usernameMessage = document.querySelector('.username-validation')
let passwordMessage = document.querySelector('.password-validation')

let usernameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')

function usernameValidation () {
    // alert('username')
    if (usernameInput.value.length < 12) {
        usernameMessage.style.color = 'red'
        usernameMessage.innerHTML = 'Must Contain 12 Character (Min)'
        usernameMessage.style.display = 'block'
    } else {
        usernameMessage.style.color = 'green'
        usernameMessage.innerHTML = 'Correct Username Value'
    }
}

function passwordValidation () {
    // alert('Password')
    if (passwordInput.value.length < 8) {
        passwordMessage.style.color = 'red'
        passwordMessage.innerHTML = 'Must Contain 8 Character (Min)'
        passwordMessage.style.display = 'block'
    } else {
        passwordMessage.style.color = 'green'
        passwordMessage.innerHTML = 'Correct Password Value'
    }
    
}