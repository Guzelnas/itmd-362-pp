$('#contact-form').on("submit", function(e) {
  var phone = $('#phone').val();
  var phoneValid = /^\d{10}$/;
  e.preventDefault();
  if (phone.value.match(phoneValid)) {
    $('#contact-form').append('The form was submitted');
  } else {
    $(this).remove();
    console.log('Wrong phone format');
    $('#invalid').remove();
    $('#contact-form') append('<li id = "invalid">Phone number must contain 10 digits!</li>');
    return false;
  }
});
