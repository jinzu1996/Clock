const hoursetl = document.getElementById("hour");
const minsetl = document.getElementById("minute");
const secsetl = document.getElementById("Seconds");
const amsetl = document.getElementById("ampm");




function updateclock()
{
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h > 12)
    {
        h = h - 12
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h;

    hoursetl.innerText = h;
    minsetl.innerText = m;
    secsetl.innerText = s;
    amsetl.innerText = ampm;
    setTimeout(() => {
        updateclock()
    }, 1000);
}

updateclock();