//laat de registeren button niet zien
document.getElementById("mainButton").style.display = "none";

//laat de progress bar zien die op display none staat in css
let progress = document.getElementsByClassName('progressBar');
for (let i = 0; i < progress.length; i += 1) {
  progress[i].style.display = 'flex';
}

// geeft cijfers mee aan percentages, later wordt deze gekoppeld aan tab
let progressBar = document.querySelector(".progressFront");
let percentages = ["0%", "25%", "50%", "75%"];


// laat de input velden niet zien
let input = document.querySelectorAll(".info");
console.log(input);
for (let i = 0; i < input.length; i++) {
  input[i].style.display = 'none';
}


// Zet de actuele tab als eerste (0) en roept dan de zieInfo functie aan
let currentTab = 0;
zieInfo(currentTab);



// hier begint code gebruikt van (zie bron hieronder) met kleine aanpassingen van mijzelf
//W3schools. (z.d.). How to - Form with multiple steps. Geraadpleegd op 20 juni 2020, van https://www.w3schools.com/howto/howto_js_form_steps.asp 

//functie kijkt op welke tab hij zit en zorgt dat de goede button hierbij komt te staan
function zieInfo(n) {
  let x = document.getElementsByClassName("info");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("terug").style.display = "none";
  } else {
    document.getElementById("terug").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("volgende").innerHTML = "Registreer";
  } else {
    document.getElementById("volgende").innerHTML = "Volgende";
  }
  fixStepIndicator(n)
}
// hier eindigt code gebruikt van (zie bron hierboven) met kleine aanpassingen van mijzelf


//zet de knoppen terug en volgende aan
let buttons = document.getElementsByClassName('knoppen');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].style.display = 'flex';
}

// hier begint code gebruikt van (zie bron hieronder) met kleine aanpassingen van mijzelf
//W3schools. (z.d.). How to - Form with multiple steps. Geraadpleegd op 20 juni 2020, van https://www.w3schools.com/howto/howto_js_form_steps.asp 
function volgendeTerug(n) {

  let x = document.getElementsByClassName("info");

  if (n == 1 && !validatie()) return false;

  x[currentTab].style.display = "none";

  currentTab = currentTab + n;

  if (currentTab >= x.length) {
    document.getElementById("registreer").submit();
    return false;
  }
  zieInfo(currentTab);
}

// Functie checkt of de input velden ingevuld zijn, zo niet dan wordt deze als invalid gerekend en krijg rode kleur. 
function validatie() {

  let x, y, i, valid = true;
  x = document.getElementsByClassName("info");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {

    if (y[i].value == "") {

      y[i].className += " invalid";

      valid = false;
    }
  }

  if (valid) {
    document.getElementsByClassName("stap")[currentTab].className += " finish";
  }
  return valid;
}
// hier eindigt code gebruikt van (zie bron hierboven) met kleine aanpassingen van mijzelf

// This function removes the "active" class of all steps...
function fixStepIndicator(n) {

  let i, x = document.getElementsByClassName("stap");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
    console.log(n)

  }

  //... and adds the "active" class to the current step:
  progressBar.innerHTML = percentages[n];
  progressBar.style.width = percentages[n];
  x[n].className += " active";
}


