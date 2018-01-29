$('#contact-form').on("submit", function(e) {
      var phone = $('#phone').val();
      var phoneValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      e.preventDefault();
      if (!phoneValid.test(phone)) {
        console.log('Wrong phone format')
        $('#invalid').remove();
        $('#contact-form')append('<li id = "invalid">Phone number must contain 10 digits!</li>');
        return false;
      } else {
        $('#invalid').remove();
        $(this).html('The form was submitted');
      });
