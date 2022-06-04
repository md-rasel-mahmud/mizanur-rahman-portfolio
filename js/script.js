// Scrole background to change navigation background color

window.addEventListener('scroll', function () {
    let header = document.querySelector('nav');
    header.classList.toggle('scrolling-active', window.scrollY > 0);
})


// Digit counter 

let counts=setInterval(updated);
let upto=0;
function updated(){
    var count= document.getElementById("counter");
    count.innerHTML=++upto+"+";
    if(upto===632)
    {
        clearInterval(counts);
    }
}

let counts2=setInterval(updated2);
let upto2=0;
function updated2(){
    var count2= document.getElementById("counter2");
    count2.innerHTML=++upto2+"+";
    if(upto===565)
    {
        clearInterval(counts2);
    }
}
let counts3=setInterval(updated3);
let upto3=0;
function updated3(){
    var count3= document.getElementById("counter3");
    count3.innerHTML=++upto3+"+";
    if(upto===432)
    {
        clearInterval(counts3);
    }
}


//Contact click status 

function show(){
    var show = document.querySelector(".success").style.display = "inline-block";
    
}


// Contact information  data
const scriptURL = 'https://script.google.com/macros/s/AKfycbx0DN6OSsVqIhMGWgtjtUufasyMyW5kR-St9L_px4EvyQfna7XPGS9xJkvhQUnEr5yZ/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})

