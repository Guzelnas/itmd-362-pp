$('#contact-form').on("submit", function(e) {
  var phone = $('#phone').val();
  var phoneValid = /^\d{10}$/;
  e.preventDefault();
  if (!phoneValid.test(phone)) {
    console.log('invalid phone');
    $('#invalid').remove();
    $('#contact-form') append('Phone number must contain 10 digits!');
    return false;
  } else {
    $('#contact-form').append('The form was submitted');
  }
});
