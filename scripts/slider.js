//selecting all required elements
const myslide = document.querySelectorAll('.myslider');
const dot = document.querySelectorAll('.dot-slid');
// global counter variable
let counter = 1;
slideFun(counter);
// auto slide after 8s
let timer = setInterval(autoSlide, 8000);
function autoSlide() {
   counter += 1;
   slideFun(counter);
}
// on click function to change the slide directly set in the index page 
function movement(n) {
   counter += n;
   slideFun(counter);
   resetTimer();
}
// giving numbers to the slides directly in the index page
function currentSlide(n) {
   counter = n;
   slideFun(counter);
   resetTimer();
}
// reset auto slide
function resetTimer() {
   clearInterval(timer);
   timer = setInterval(autoSlide, 8000);
}

function slideFun (n)  {
   let i;
   // gives the slides a display none
   for (i = 0; i < myslide.length; i++) {
      myslide[i].style.display = "none";
   }
   // removes active-dot class from the current icon
   for (i = 0; i < dot.length; i++) {
      dot[i].classList.remove('active-dot');
   }
   // return to the first slide after finishing the set time in the autoslide function on the last slide
   if (n > myslide.length) {
      counter = 1;
   }
   if (n < 1) {
      counter = myslide.length;
   }
   myslide[counter - 1].style.display = "block"; // shows s slide
   dot[counter - 1].classList.add('active-dot'); // add active-dot class to the icon to match the current slide
}