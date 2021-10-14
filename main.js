'use strict'
const showDate = {
    dateForDateWithText: {},
    dateForDateWithoutText: {},
    dateWithText: {},
    currentDay: 0,
    currentMonth: 0,
    block: {},
    timerIdOne: {},
    timerIdTwo: {},
    rusDays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    rusMonths: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнб", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    hours: ['час', 'часов', 'часа'],
    hoursText: {},
    chas: '',
    chasa: '',
    chasov: '',
    arrayToRemove: [],
    showDateWithText: function() {
        showDate.dateForDateWithText = new Date();
        showDate.currentDay = showDate.dateForDateWithText.getDay()
        showDate.currentMonth = showDate.dateForDateWithText.getMonth()
        showDate.dateWithText = document.createElement('div')
        showDate.dateWithText.innerHTML = 'Сегодня ' + showDate.rusDays[showDate.currentDay] + ', ' + showDate.dateForDateWithText.getDate() + ' ' + showDate.rusMonths[showDate.currentMonth] + ' ' + showDate.dateForDateWithText.getFullYear() + ' года ' + showDate.dateForDateWithText.getHours() + " час " + showDate.dateForDateWithText.getMinutes() + " минут " + showDate.dateForDateWithText.getSeconds() + ' секунд '
        showDate.dateWithText.classList.add('date-with-text')   
        document.body.append(showDate.dateWithText)
    },
    showDateWithoutText: function() {
        showDate.arrayToRemove = document.querySelectorAll('.date, .date-with-text')
        showDate.dateForDateWithoutText = new Date();
        showDate.currentMonthNum = showDate.dateForDateWithoutText.getMonth()
        showDate.dateWithoutText = document.createElement('div')
        showDate.dateWithoutText.innerHTML = showDate.dateForDateWithoutText.getDate() + "." + (showDate.currentMonthNum + 1) + '.' + showDate.dateForDateWithoutText.getFullYear() + ' - ' + showDate.dateForDateWithoutText.getHours() + ":" + showDate.dateForDateWithoutText.getMinutes() + ":" + showDate.dateForDateWithoutText.getSeconds()
        showDate.dateWithoutText.classList.add('date')   
        document.body.append(showDate.dateWithoutText)
    },
    grammar: function() {
        hoursText = function() {
            chas = showDate.dateForDateWithoutText.getHours()[0] + ' час'
            chasa = function() {
                for(let i = 1; i <= 4; i++) {
                    return showDate.dateForDateWithoutText.getHours()[i] + ' часа'
                }
            }
            chasov = function() {
                for(let i = 4; showDate.hours.length <= 4; i++) {
                    return showDate.dateForDateWithoutText.getHours()[i] + ' часов'
                }
            }
        }
    },
    start: function() {
        showDate.timerIdOne = setInterval(showDate.showDateWithText, 1000);
        showDate.timerIdTwo = setInterval(showDate.showDateWithoutText, 1000);
        showDate.grammar()
    }
}
showDate.start()