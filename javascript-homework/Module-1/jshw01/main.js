"use strict";

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const cancel = 'Отменено пользователем!';
const accessDenied = 'Доступ запрещен!';

let userLogin = prompt('Введите логин:');
if(userLogin==adminLogin){
  let userPassword = prompt('Введите пароль:');
  if(userPassword == adminPassword){
    alert('Добро пожаловать!')
  } else if(userPassword==null){
    alert(cancel);
  } else {
    alert(accessDenied);
  }
} else if(userLogin==null){
  alert(cancel);
}else {
  alert(accessDenied);
}