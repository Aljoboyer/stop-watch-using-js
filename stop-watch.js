const Hours = document.getElementById('hour');
const Minutes = document.getElementById('minute');
const Seconds = document.getElementById('second');
const MilliSecond = document.getElementById('milliSecond')

let second = 0; 
let  milli = 0;
let hour = 0;
let minute = 0;
const TimeStart = () => {
     startTime = setInterval(started, 10)
}
const started = () => {
    milli++ 
    MilliSecond.innerText = milli;
    if(milli > 99)
    {   second++
        Seconds.innerText = second;
        milli = 0
    }
    if (second > 59)
    {
        minute++
        Minutes.innerText = minute;
        second = 0
    }
    if(minute > 59)
    {
        hour++
        Hours.innerText = hour;
        minute = 0
    }
}
const PauseTime = () => {
    clearInterval(startTime)
}

const ClearField = () => {
    clearInterval(startTime)
    Seconds.innerText = 0;
    Minutes.innerText = 0;
    Hours.innerText = 0;
    MilliSecond.innerText = 0;
    second = 0; 
    milli = 0;
    hour = 0;
    minute = 0;
}