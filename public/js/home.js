const myModal = new bootstrap.Modal("#transaction-modal")
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem('session')
let cashIn = []
let cashOut = []
let data = {
    transactions: []
}

document.getElementById('button-logout').addEventListener('click', logout)

//adicionar lançamento
document.getElementById('transaction-form').addEventListener('submit', function(e){
    e.preventDefault()
    const value = parseFloat(document.getElementById('value-input').value);
    const description = document.getElementById('description-input').value;
    const date = document.getElementById('description-input').value;
    const type = document.querySelector('input[name="type-input"]:checked').value;

    data.transactions.unshift({
        value: value, type:type, description: description, date: date
    })

    saveData(data);
    e.target.reset()
    myModal.hide
    alert('Lanamento adicionado com sucesso')


    
})

checkLogged();

function checkLogged(){
    if(session){
        sessionStorage.setItem('logged', session)
        logged = session;
    }
    if(!logged){
        saveSession(logged, session)
        window.location.href = 'index.html'
        return
    }

    const dataUser = localStorage.getItem(logged)
    if(dataUser){
        data = JSON.parse(dataUser)

    }

    getCashIn();
}

function logout(){
    sessionStorage.removeItem('logged');
    localStorage.removeItem('session')

    window.location.href = 'index.html'
}

function getCashIn(){
    const transactions = data.transactions

    const cashIn = transactions.filter((item) => item.type ==="1")

    if(cashIn.length){
        let cashInHtml = ``;
        let limit=0;
    
    if(cashIn.length > 5){
        limit= 5;
    }else{
        limit = cashIn.length
    }
    for (let index = 0; index < array.length; index++) {
        cashInHtml
        
    }
}
}

function saveData(){
    localStorage.setItem(data.login, JSON.stringify(data))
}