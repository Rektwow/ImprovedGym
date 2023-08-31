
$('form').submit(function (e) {
   e.preventDefault()
   //selecting all required elements
   let values = {}
   let errors = {}
   let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   let phonenr = /^[\+]?[0-9]+$/;
   let letters = /^[A-Za-z]+$/;
 
   values.firstName = $('#first_name').val(),
   values.lastName = $('#last_name').val(),
   values.email = $('#e_mail').val(),
   values.phone = $('#phone').val(),
   values.message = $('#message').val()
 
   console.log(values)
    // if the value of the first name does not match the letter variable OR os is shorter than 2 letters show an error
   if (!values.firstName.match(letters) || values.firstName.length < 2){
      errors.firstName = 'Invalid First Name'
   } 
    // if the value of the last name does not match the letter variable OR os is shorter than 3 letters show an error
   if (!values.lastName.match(letters) || values.lastName.length < 3){
     errors.lastName = 'Invalid Last Name'
   }
    // if the value of the email does is different form the Regex variable show an error
   if(!regex.test(values.email)) {
     errors.email = 'Invalid Email'
   }
    // if the value of the phone does not match the phonenr variable OR is longer tha 12 numbers OR os is shorter than 8 numbers show an error
   if (!values.phone.match(phonenr) || values.phone.length > 12 || values.phone.length < 8){
     errors.phone = 'Invalid Phone Number'
   }
    // if message has less than 30 characters show an error
   if (values.message.length < 30){
     errors.message = 'Message is too short'
   }
 
    // errors shown in each section
   if ($.isEmptyObject(errors) ){
     console.log('Success')
     $('.error-text').remove() // removes error message if the section is correct
   }else {
     console.log(errors)
     $('.error-text').remove()
     if (errors.firstName){
       $('#first_name').after(`<span class="error-text">${errors.firstName}</span>`)
     }
     if (errors.lastName){
       $('#last_name').after(`<span class="error-text">${errors.lastName}</span>`)
     }
     if (errors.email){
       $('#e_mail').after(`<span class="error-text">${errors.email}</span>`)
     }
     if (errors.phone){
       $('#phone').after(`<span class="error-text">${errors.phone}</span>`)
     }
     if (errors.message){
       $('#message').after(`<span class="error-text">${errors.message}</span>`)
     }
   }
 })
 // counts how many characters are written in the Message box
 $('#message').on('input',function(){
   $('.counter').text($(this).val().length)
 })
 