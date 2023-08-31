// click event for font icon
$('.acc').click(function () {

   // reset all info box except the activated one
   $('.ac-item-info').not( $(this).parent().siblings() ).slideUp()
   
   // rest all icons to a plus except the clicked on
   $('.fa-minus').not($(this)).removeClass('fa-minus').addClass('fa-plus')
   
   // toggle icon classes
   $(this).toggleClass('fa-plus')
   $(this).toggleClass('fa-minus')
 
   // slide down info of clicked item
   $(this).parent().siblings().slideToggle()
 
 })