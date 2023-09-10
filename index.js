// Date Functions
const datetime = new Date();
console.log(datetime.toJSON());

const day = document.querySelector('.day');
const utc = document.querySelector('.utc');

let days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
};

day.innerHTML += days[datetime.getUTCDay()];
utc.innerHTML += datetime.toUTCString();

