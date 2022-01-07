const myModal = new bootstrap.Modal("#register-modal")
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem('session')
checkLogged();

//logar no sistema
document.getElementById('login-form').addEventListener('submit', function(e){
    e.preventDefault();

    const email = document.getElementById('email-input').value
    const password = document.getElementById('password-input').value   
    const session = document.getElementById('session-check').checked  
    
    const account = getAccount(email)

    if(!account){
        alert('opps, verifique usuario e senha')
        return
    }

    if(account){
    if(account.password !== password){
        alert('opps, verifique user e senha')
        retrun
    }

    window.location.href = 'home.html'
    }
})


//criar conta
document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();
    const email = document.getElementById('email-create-input').value
    const password = document.getElementById('password-create-input').value   
    
    if(email.length < 5){
        alert('use email válido!')
        return
    }

    if(password.length < 4){
        alert('Minimo 4 digitos')
        return
    }

    saveAccount({
        login: email,
        password: password,
        transactions:[]
    })

    myModal.hide()
    alert("conta criada com sucesso")
})

function checkLogged(){
    if(session){
        sessionStorage.setItem('logged', session)
        logged = session;
    }
    if(logged){
        saveSession(logged, session)
        window.location.href = 'home.html;'
    }
}

function saveAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession ){
    if(saveSession){
        localStorage.setItem('session', data)
    }

    sessionStorage.setItem('logged', data)
}

function getAccount(key){
    const account = localStorage.getItem

    if(account){
        return JSON.parse(account)
    }
    return "";
}

