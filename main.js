"use strict"


const showWeekDays = {
    date: {},
    currentDay: 0,
    block: {},
    rusDays: [],
    daysOnPage: [],

    getWeekDay: function () {
        showWeekDays.rusDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ]
        showWeekDays.date = new Date();
        showWeekDays.currentDay = showWeekDays.date.getDay();
        console.log('Текущий день ' + showWeekDays.rusDays[showWeekDays.currentDay])
        
    
        for (let day of showWeekDays.rusDays){
            showWeekDays.block = document.createElement('div')
            showWeekDays.block.innerText = day.toString()
        document.body.appendChild(showWeekDays.block)
    }
    
    
    showWeekDays.daysOnPage = document.querySelectorAll('div')
          
            for(let item of showWeekDays.daysOnPage){
                if(item.innerHTML === showWeekDays.rusDays[showWeekDays.currentDay]){
                    item.style.fontWeight = 'bold'
                } 
            }
    
            showWeekDays.daysOnPage[0].style.fontStyle = 'italic'
            showWeekDays.daysOnPage[6].style.fontStyle = 'italic'
           

        return showWeekDays.rusDays[showWeekDays.currentDay];
    }


}





showWeekDays.getWeekDay()



