const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let password;

do{
    password = prompt('Введите свой пароль');
    check = passwords.includes(password);
    if(password == null){
        alert('Приходи еще!');
        break;
    }else if(check){
    alert('Добро пожаловать!')
    break;
   }else{
       attempts--
       alert(`Неверный пароль, у вас осталось ${attempts} попыток`)
   }
}while(attempts!==0);
if(attempts==0){
   alert( "У вас закончились попытки, аккаунт заблокирован!")
}