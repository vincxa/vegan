var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
        
        var x = setInterval(function() {
        
          var now = new Date().getTime();
        
          var distance = countDownDate - now;
        
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
          // Display the result in the element with id="demo"
          document.getElementById("demo").innerHTML = days + ": " + hours + ": "
          + minutes + ": " + seconds + "";
        
          // If the count down is finished, write some text
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
          }
        }, 1000);

function xavsi(){
  document.getElementById('first').style.backgroundColor = '#79B331';
  document.getElementById('fir1').style.color = '#79B331';
  
  
  document.getElementById('t').style.backgroundColor = 'gainsboro';
  document.getElementById('t1').style.color = 'black'
  document.getElementById('s').style.backgroundColor = 'gainsboro';
  document.getElementById('s1').style.color = 'black'
  document.getElementById('f').style.backgroundColor = 'gainsboro';
  document.getElementById('f1').style.color = 'black';
}

function xavsi2(){
  document.getElementById('s').style.backgroundColor = '#79B331';
  document.getElementById('s1').style.color = '#79B331'

  document.getElementById('t').style.backgroundColor = 'gainsboro';
  document.getElementById('t1').style.color = 'black'
  document.getElementById('f').style.backgroundColor = 'gainsboro';
  document.getElementById('f1').style.color = 'black'
  document.getElementById('first').style.backgroundColor = 'gainsboro';
  document.getElementById('fir1').style.color = 'black';
}
function xavsi3(){
  document.getElementById('t').style.backgroundColor = '#79B331';
  document.getElementById('t1').style.color = '#79B331'

  document.getElementById('s').style.backgroundColor = 'gainsboro';
  document.getElementById('s1').style.color = 'black'
  document.getElementById('first').style.backgroundColor = 'gainsboro';
  document.getElementById('fir1').style.color = 'black';
  document.getElementById('f').style.backgroundColor = 'gainsboro';
  document.getElementById('f1').style.color = 'black'
}
function xavsi4(){
  document.getElementById('f').style.backgroundColor = '#79B331';
  document.getElementById('f1').style.color = '#79B331'

  document.getElementById('t').style.backgroundColor = 'gainsboro';
  document.getElementById('t1').style.color = 'black'
  document.getElementById('s').style.backgroundColor = 'gainsboro';
  document.getElementById('s1').style.color = 'black'
  document.getElementById('first').style.backgroundColor = 'gainsboro';
  document.getElementById('fir1').style.color = 'black';
}
