$('#contact-form').on("submit", function(e) {
      var phone = $('#phone').val();
      var phoneValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      e.preventDefault();
      if (!phoneValid.test(phone)) {
        console.log('Phone number must contain 10 digits')
        $('#invalid').remove();
        return false;
      } else {
        $(this).html('The form was submitted');
      });
