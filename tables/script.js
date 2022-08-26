let table = document.querySelector('.table');
let container = document.querySelector('.container');
let tbody = document.querySelector('.tbody');
let usersArr = [];

fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(users => {
        usersArr.push(users);
        console.log(usersArr);

        for(let i = 0; i < usersArr[0].length; i++) {
            let tr = document.createElement('tr');
            tr.classList.add('tr');
            tr.innerHTML = `
                    <td>${usersArr[0][i].name}</td>
                    <td>${usersArr[0][i].email}</td>
                    <td>${usersArr[0][i].phone}</td>
            </table>
      `;
      tbody.append(tr);
    }
})   
