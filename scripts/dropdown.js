// hides the footer from the bottom of the page and copies into the dropdown menu
$('nav').append($('footer').clone().removeClass()) 
$('nav footer').addClass('hidden')
// toggle function logo toggles dropdown menu
$('.second-logo').click(function() {
   $('nav > ul').slideToggle();
   // show footer in nav bar after a set time
   if ($('nav footer').hasClass('hidden')) {   
      setTimeout(function() {
         $('nav footer').toggleClass('hidden')
      }, 350); 
   }
   // show footer in nav
    else if (!$('nav footer').hasClass('hidden')) {
      $('nav footer').addClass('hidden')
    } 
    // hide footer in nav
    else {
      $('nav footer').removeClass('hidden')
   }

})
// resize function to hide the copied footer inside of the nav when making screen size bigger
   $(this).resize(function(){
      if($(this).width() > 380) {
         $('nav footer').addClass('hidden')
      }
   }) 

// resize function to always show nav when making screen size bigger
$(this).resize(function(){
   if($(this).width() > 550) {
      $('ul').removeAttr('style')
   }
})

// toggles sub ul when clicking on li of the main ul
$('ul li').click(function() {
   $('ul ul').not($(this).find('.go-up')).slideUp()
   $(this).find('ul').slideToggle();
}) 

// toggles dropdown menu when clicked on li of sub ul
$('ul ul li').click(function() {
   if ($(this).width() > 551){
      $('nav > ul').slideToggle();
   }
}) 

// scroll to top button

let scrollButton = document.querySelector('.gotop');
window.onscroll = function() {
   scrollFunction()
}
function scrollFunction() {
   if (document.documentElement.scrollTop > 1000) {
      scrollButton.style.display ="block";
   } else {
      scrollButton.style.display ="none";
   }
}


