let email = document.querySelector('#email');
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let phone = document.querySelector('#phone');
let printClient = document.querySelector('#printClient');
let addClient = document.querySelector('#addClient');
let usersArea = document.querySelector('#usersArea');

let users = [];

addClient.addEventListener('click', function(e) {
    e.preventDefault();

    let clientSuperObj = {
        email:email.value,
        firstName:firstName.value,
        lastName:lastName.value,
        phone:phone.value,
    };

    if(email.value && firstName.value && lastName.value && phone.value) {
        users.push(clientSuperObj);
        email.value && firstName.value && lastName.value && phone.value === "";   
        console.log(users);
    }else{
        alert('Please enter all the fields');
        email.value && firstName.value && lastName.value && phone.value === "";
    }
    
});

printClient.addEventListener('click', function(e) {
    e.preventDefault();

    if(users.length === 0){
        alert('no client member to print')
    }else{
        for(let i = 0; i < users.length; i++) {
            let div = document.createElement('div');
            div.innerHTML = `
            <h3 class="card-title">${users[i].firstName} ${users[i].lastName}</h3>
            <div class="card-body">
                <p>${users[i].phone}</p>
                <p>${users[i].email}</p>
            </div>`;
            div.classList.add('card');
            usersArea.append(div)
            users.shift();
        }
        email.value && firstName.value && lastName.value && phone.value === "";
    }
});

