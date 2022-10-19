"use strict"

let date = new Date(2011, 1, 20, 3, 12);
console.log(date)

function getWeekDay(date) {
    let wd = ['ВС','ПН','ВТ','СР','ЧТ','ПТ','СБ'];
    return wd[date.getDay()];
}


date = new Date(2012, 0, 3);
// alert( getWeekDay(date) );

function getLocalDay(date) {
    let wd = date.getDay();
    return wd == 0 ? 7 : wd;
}

date = new Date(2012, 0, 3);
console.log(date);
alert( getLocalDay(date) );

function getDateAgo(date, days) {
    let cur = new Date(date)
    cur.setDate(date.getDate() - days)
    return cur
}

date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) );
// alert( getDateAgo(date, 2) );
// alert( getDateAgo(date, 365) );

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month);
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);
    return date.getDate();
}

// alert(getLastDayOfMonth(2012, 11));

function getSecondsToTomorrow() {
    let date = new Date();
    let hourSec = date.getHours()*3600;
    let minutesSec = date.getMinutes()*60;
    let sec = date.getSeconds();
    return 24*3600 - hourSec - minutesSec - sec;
}

console.log(getSecondsToTomorrow());



