"use strick";

let sharm = 15;
let hurgada = 25;
let taba = 6;

let numberOfPlaces = prompt('Введите количество человек');
 if(numberOfPlaces==null){
    alert('Приходите еще')
}else if( numberOfPlaces<=0 || !Number.isInteger(Number(numberOfPlaces))){
    alert('Ошибка ввода');
}else if(numberOfPlaces<taba){
    alert('У вас есть возможность поехать в 3 тура');
   let user= prompt('Если вы введете 1 вы поедете в - SHARM. Если вы введете 2 вы поедете в - HURGADA. Если вы введете 3 вы поедете в - TABA')
    switch(Number(user)){
        case(1):
        alert('Приятного путешествия в группе SHARM');
        break;
        case(2):
        alert('Приятного путешествия в группе HURGADA');
        break;
        case(3):
        alert('Приятного путешествия в группе TABA')
        break;
    }
}

 if(taba<=numberOfPlaces && numberOfPlaces<=sharm){
    alert('У вас есть возможность поехать в 2 тура');
   let user= prompt('Если вы введете 1 вы поедете в - HURGADA. Если вы введете 2 вы поедете в - TABA')
    switch(Number(user)){
        case(1):
        alert('Приятного путешествия в группе HURGADA');
        break;
        case(2):
        alert('Приятного путешествия в группе  TABA');
        break;
        }
}else if(numberOfPlaces>sharm &&numberOfPlaces<=hurgada){
    alert('Приятного путешествия в группе TABA');
   }else if(numberOfPlaces>hurgada){
       alert('Извините, столько мест нет ни в одной группе!')
   } 
