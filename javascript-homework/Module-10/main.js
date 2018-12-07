'use strict'

/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

const getAll = document.querySelector('.get-all-users');
const removeAll = document.querySelector('.remove-all-user');
const btnGet = document.querySelector('.get-uset-by-id');
const inputGet = document.querySelector('.inp-get-by-id');
const btnAdd = document.querySelector('.add-user');
const name = document.querySelector('.name');
const age = document.querySelector('.age');
const btnRemove = document.querySelector('.remove-user');
const inputRemove = document.querySelector('.inp-remove');
const btnUpdate = document.querySelector('.update-user');
const inputUpdate = document.querySelector('.inp-update');
const ul = document.querySelector('.list');
const getForm = document.querySelector('.get-form');
const addForm = document.querySelector('.add-form');
const removeForm = document.querySelector('.remove-form');
const updateForm = document.querySelector('.update-form');

function getAllUsers() {
  fetch('https://test-users-api.herokuapp.com/users/')
  .then(response => response.json())
  .then(data => createLi(data))
  .catch(err => console.log(err));
} 

function createLi(obj) {
  for(let el of obj.data){
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = `ID: ${el.id} Name: ${el.name} Age: ${el.age};`
    ul.append(li);
  }
}
getAll.addEventListener('click', getAllUsers);
removeAll.addEventListener('click', () => ul.innerHTML = '');

function getUserById(event){
  event.preventDefault();
  fetch(`https://test-users-api.herokuapp.com/users/${inputGet.value}`)
  .then(response => response.json())
  .then(res => createOneLi(res.data))
  .catch(err => console.log(err));
  getForm.reset();
}
function createOneLi(obj){
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = `ID: ${obj.id} Name: ${obj.name} Age: ${obj.age};`
    ul.append(li);
}

btnGet.addEventListener('click', getUserById);

function addUser(event){
  event.preventDefault();
  fetch('https://test-users-api.herokuapp.com/users/', {
    method: 'POST',
    body: JSON.stringify({
      name: name.value,
      age: age.value
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(res => addOneLi(res.data))
  .catch(err => console.log(err));
  addForm.reset()

}
function addOneLi(obj){
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = `ID: ${obj._id} Name: ${obj.name} Age: ${obj.age};`
  ul.append(li);
}

btnAdd.addEventListener('click', addUser);

function removeUser(event){
  event.preventDefault();
  fetch(`https://test-users-api.herokuapp.com/users/${inputRemove.value}`, {
    method: 'DELETE',
  })
  removeForm.reset()
}

btnRemove.addEventListener('click', removeUser);

function updateUser(event) {
  event.preventDefault();
  let newName = prompt('Enter new name:');
  let newAge = prompt('Enter new age:');
  let user = {
    name: newName,
    age: newAge
  }
  fetch(`https://test-users-api.herokuapp.com/users/${inputUpdate.value}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .catch(err => console.log(err));
  updateForm.reset();
}

btnUpdate.addEventListener('click', updateUser)