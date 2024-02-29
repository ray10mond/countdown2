var countdowndate=new Date("mar 7,2024 00:00:00").getTime();
var X = setInterval(function(){
    var now =new Date().getTime();
    var distance = countdowndate-now;

    var days = maths.floor(distanc / (1000 * 60 * 60 * 24));
    var hours = maths.floor((distance %(100 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours")

}