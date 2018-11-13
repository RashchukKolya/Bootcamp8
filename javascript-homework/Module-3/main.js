const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
    console.log(login);
    if(login.length<4 || login.length>15){
        alert("Ошибка! Логин должен быть от 4 до 16 символов")      
    }else
    {
        return false;
    }
};

const isLoginUnique = function(logins, login) {
    if(logins.includes(login)){
        alert('Такой логин уже используется!'); 
    }else
    {
        return false;
    }
};

const addLogin = function(login) {
    if(isLoginValid(login)==false && isLoginUnique(logins, login)==false){
    logins.push(login);
    alert('Логин успешно добавлен!')
    }
};

// Вызовы функции для проверки
addLogin('Ajax'); // 'Логин успешно добавлен!'
addLogin('robotGoogles'); // 'Такой логин уже используется!'
addLogin('Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin('jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'





