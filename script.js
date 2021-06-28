let bg = document.getElementById('myVideo')
let cur_date = new Date()
hour = cur_date.getHours();
function changeBg(){
    if (hour>17){
        bg.src = "bg/macosda.jpg"
    } else {
        bg.src = "bg/macOSBigSur.png"
    }
}

changeBg();

function getTime(){
    var d=new Date();
    day=d.getDay();
    var weekday=new Array(7);
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";
    weekday[0]="Sunday";

    fday = weekday[day];
    const month = d.toLocaleString('default', { month: 'long' });
    year = (d.getFullYear())
    date = (fday.slice(0,3)) + ' ' + month.slice(0,3) + ' ' + year
    document.getElementById('date').textContent=date
}

function getHrs(){
    day = new Date()
    time = day.getTime()
    document.getElementById('time').textContent=(day.getHours()+':'+ day.getMinutes())
}


setInterval(getHrs, 1000);
setInterval(getTime, 1000);
setInterval(changeBg,1000);

let params = `scrollbars=no,resizable=yes,status=no,location=yes,toolbar=no,menubar=no,
width=700,height=600,left=300,top=300`;

let setparams = `scrollbars=no,resizable=yes,status=no,location=yes,toolbar=no,menubar=no,
width=800,height=600,left=300,top=300`;

let trparams = `scrollbars=no,resizable=yes,status=no,location=yes,toolbar=no,menubar=no,
width=1000,height=500,left=300,top=300`;

function openPopup(url, name){
    newWindow = window.open(url, name, params);
}

function openTrWin(url, name){
    newWin = window.open('about:blank', name, trparams);
    newWin.document.write('<img src="'+url+'" style="position: absolute; left:0; top:0;" height="100% auto" width="100% auto" />')
}


function openImgWin(url, name){
    newWin = window.open('about:blank', name, setparams);
    newWin.document.write('<img src="'+url+'" style="position: absolute; left:0; top:0;" height="100% auto" width="100% auto" />')
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  function emyFunction() {
    document.getElementById("myeDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("edropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function myvFunction() {
    document.getElementById("myvDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("vdropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function mygFunction() {
    document.getElementById("mygDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("gdropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function mywFunction() {
    document.getElementById("mywDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("wdropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  function myhFunction() {
    document.getElementById("myhDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("hdropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function myaFunction() {
    document.getElementById("myaDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("adropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }