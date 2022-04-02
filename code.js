/* 
h = 12 - 360
    1 - 360/12
    30h + m/2

m = 60 - 360
    1 - 6
    m min - 6m 

s = 6s

1000mil -> 360
1mil -> 360/1000 = 0.36

*/
function clock() {
    let d = new Date;
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let mil = d.getMilliseconds()
    let hrotation = 30 * h + m / 2;
    let mrotation = 6*m;
    let srotation = 6*s;
    // let milrotation = 0.36*mil *60;
    console.log(h, m, s);
    let hourHand = document.getElementById("hour")
    let minHand = document.getElementById("min")
    let secHand = document.getElementById("sec")
    let body = document.getElementsByTagName("body")
    hourHand.style.transform = `rotateZ(${hrotation}deg)`
    minHand.style.transform = `rotateZ(${mrotation}deg)`
    secHand.style.transform = `rotateZ(${srotation}deg)`
    // secHand.style.transform = `rotateZ(${milrotation}deg)`
    // body[0].style.backgroundImage = `linear-gradient(${6*s}deg, magenta 50%, dodgerblue 50%)`
}
// setInterval(clock, 1000)
setInterval(clock, 1)
clock()