const dayele = document.getElementById("days");
const hrele = document.getElementById("hours");
const minele = document.getElementById("mins");
const secele = document.getElementById("secs");
const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
var selectDate = document.getElementById("date-picker").addEventListener("change",event=>{
    pattern(event.target.value);
    
});

function pattern(e)
{
    let date = new Date(e.toString());
    
    
    let year = date.getFullYear();
    
    
    let month = monthNames[date.getMonth()];

    console.log(date+year+month);
    let select = String(date.getDate()).padStart(2,'0');
    
    datePattern = String(select + " " + month+ " " + year);
    

    const currentDate = new Date();

    let getdate =new Date(datePattern);

    const diff= getdate-currentDate;

    const totalSeconds= diff/1000;

    const days= Math.floor(totalSeconds/24/3600);
    
    const hrs= Math.floor(totalSeconds/3600)%24;
    
    const min= Math.floor(totalSeconds/60) %60;
    
    const sec= Math.floor(totalSeconds)%60;
    
    if(days==="Invalid Date")
    {
    dayele.innerHTML = 0;
    hrele.innerHTML = 0;
    minele.innerHTML = 0;
    secele.innerHTML = 0;
    }

    else{
        dayele.innerHTML = days;
        hrele.innerHTML = formatTime(hrs);
        minele.innerHTML = formatTime(min);
        secele.innerHTML = formatTime(sec);
    }
    
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
    

// setInterval(()=>console.log("hai"),1000);
// countdown();

// let interval= setInterval(()=>{countdown(datePattern),1000});

// let interval= setInterval(()=>{pattern(),1000});
// let datePattern;
// setInterval(pattern(e), 1000);
// let getdate;

