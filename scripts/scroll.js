let content1 = Array.from(document.querySelectorAll('.side-row')); // select all side-row class in an array format to get access to needed information later in the program
let content2 = Array.from(document.querySelectorAll('.row-side')); // select all row-side class in an array format to get access to needed information later in the program

//console.log(content1)
//console.log(content2)

window.addEventListener('scroll', throttle(scanElement, 200)) //scroll event
window.addEventListener('scroll', throttle(scanElement, 200)) //scroll event


//add and remove side-active class
function scanElement(e){ 
   //console.count(e)
   content1.forEach(element =>{
      //console.log(element.getBoundingClientRect())
      if (isVisible(element)){
         element.classList.add('side-active')
      } else {
         element.classList.remove('side-active')
      }
      content2.forEach(element =>{
         if (isVisible(element)){
            element.classList.add('side-active')
         } else {
            element.classList.remove('side-active')
         }
      })
   })
}



// if the element top position - the viewport is <  then the distance to the top (300px) return true else return false
function isVisible(element){
   const elementDiv = element.getBoundingClientRect();
   let distanceTop = -300;
   return elementDiv.top - window.innerHeight < distanceTop ? true : false;
}

// function to reduce excessive usage of the CPU
function throttle(fn, delay){
   let lastCall = 0;
   return (...args)=>{

      let context = this;
      let current = new Date().getTime();

      if(current - lastCall < delay){
         return
      }
      lastCall = current;
      return fn.apply(context, ...args)
   }
}