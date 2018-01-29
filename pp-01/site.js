$('#contact-form').on("submit", function(e){
  $(this).html('The form was submitted');
  e.preventDefault();
});
