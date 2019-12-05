$(document).ready(function() {
    $('.num_button').click(function() {
      var current = $("#da_display").val();

      if(current == '0') {
        current ="";
      }
       $("#da_display").val( current + $(this).text());

    });
});
