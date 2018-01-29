$('#contact-form').on("submit", function(e) {
  var email = $('#email').val();
  var emailValid = /.+@.+/;
  e.preventDefault();
  if (!emailValid.test(email)) {
    console.log('invalid email');
    $('#invalid').remove();
    $('#contact-form') append('Wrong email');
    return false;
  } else {
    $(this).remove();
    $('body').append('The form was submitted');
  }
});
