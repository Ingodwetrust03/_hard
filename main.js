"use strict"

let lang = 'en' 
let engDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let rusDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота','Воскресенье']

if (lang == 'en') {
    console.log(engDays)
} else if (lang == 'ru') {
    console.log(rusDays)
} else {
    console.log('Укажите ru или en') 
}


lang = 'ru' 
switch (true){
    case lang == 'en':
        console.log(engDays);
        break;
    case lang == 'ru':
         console.log(rusDays);
        break;
    default:
        console.log('Укажите ru или en')   
}


lang = 'en' 
let daysArray = [
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота','Воскресенье'] 
]

let showDays = (lang == 'en') ? console.log(daysArray[0]):console.log(daysArray[1]);





let namePerson =''
let result = (namePerson == 'Артем') ? console.log('директор'):(namePerson == 'Александр') ? console.log('преподаватель'):console.log('cтудент');
