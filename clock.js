// Clock Functionality

const startTime = () => {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let session = "AM";

    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = `${h}:${m}:${s}:${session}`;
    document.querySelector('.clock-text').innerText = time;
    document.querySelector('.clock-text').textContent = time;
    
    setTimeout(startTime, 1000);
}



startTime();
