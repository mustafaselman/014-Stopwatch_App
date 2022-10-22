let hour = "0";
let minute = "0";
let second = "0";
let milisecond = "0";
let action = false;
let myInterval;

stop();
addEventListeners();

function addEventListeners (){
    actionButton.addEventListener("click",()=>{
        playSituation();
    });
    resetButton.addEventListener("click",()=>{
        reset();
    });
};
   
function currentTimeDigital(hr, min, sec, milsec)
{
    if ((hr/20).toFixed()>0){
        digitalClockHour.innerHTML = hr;
    }
    else{
        digitalClockHour.innerHTML = "0" + hr;
    }
    if ((min/20).toFixed()>0){
        digitalClockMinute.innerHTML = min;
    }
    else{
        digitalClockMinute.innerHTML = "0" + min;
    }
    if ((sec/20).toFixed()>0){
        digitalClockSecond.innerHTML = sec;
    }
    else{
        digitalClockSecond.innerHTML = "0" + sec;
    }
    if ((milsec/20).toFixed()>0){
        digitalClockMilisecond.innerHTML = milsec;
    }
    else{
        digitalClockMilisecond.innerHTML = "0" + milsec;
    }
}

function start (){
    actionButton.innerHTML = '<i class="bi bi-pause-fill"></i>'
    myInterval=setInterval(()=>{
        milisecond++;
        currentTimeDigital(hour,minute,second,milisecond) 
         if(milisecond == 99){
            milisecond = 0;
            second++;
            if (second == 60){
                second = 0;
                minute++;
                if (minute == 60){
                    minute = 0;
                    hour++;
                    if(hour==24){
                        hour = 0;
                    }
                }
            }
         } 
    },1);
}

function stop (){
    clearInterval(myInterval);
    digitalClockHour.innerHTML = "0" + hour;
    digitalClockMinute.innerHTML = "0" + minute;
    digitalClockSecond.innerHTML = "0" + second;
    digitalClockMilisecond.innerHTML = "0" + milisecond;
    currentTimeDigital(hour,minute,second,milisecond);
}

function playSituation (){
    if(!action){
        start();
        action = true;
    }
    else{
        stop();
        actionButton.innerHTML = '<i class="bi bi-play-fill"></i>'
        action = false ;
    }
}

function reset(){
hour = "0";
minute = "0";
second = "0";
milisecond = "0";
stop();
}