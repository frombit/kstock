$(function () {
  // console.log(1111);
  var submitted = false;
  $("input,textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function ($form, event) {
      // $('#gform input, #gform textarea').val("") // 구글로 전달이 안됨. 기다리는 시간 필요
      // $('#gform *').fadeOut(500);
      $('#gform *').hide();
      $('#success').html("<div class='alert alert-success'>");
      $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        .append("</button>");
      $('#success > .alert-success')
        .append("<strong>메세지가 전달되었습니다.</strong>");
      $('#success > .alert-success')
        .append('</div>');
      //clear all fields
      $('#contactForm').trigger("reset");
      // event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      // var name = $("input#name").val();
      // var email = $("input#email").val();
      // var phone = $("input#phone").val();
      // var message = $("textarea#message").val();
      // var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      // if (firstName.indexOf(' ') >= 0) {
      //     firstName = name.split(' ').slice(0, -1).join(' ');
      // }
      // $('#gform').on('submit', function (e) {
      //     $('#gform *').fadeOut(2000);
      //     $('#gform').prepend('Your submission has been processed...');
      // });
      // $.ajax({
      //     url: "././mail/contact_me.php",
      //     type: "POST",
      //     data: {
      //         name: name,
      //         // phone: phone,
      //         // email: email,
      //         message: message
      //     },
      //     cache: false,
      //     success: function () {
      //         // Success message
      //         $('#success').html("<div class='alert alert-success'>");
      //         $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
      //             .append("</button>");
      //         $('#success > .alert-success')
      //             .append("<strong>Your message has been sent. </strong>");
      //         $('#success > .alert-success')
      //             .append('</div>');

      //         //clear all fields
      //         $('#contactForm').trigger("reset");
      //     },
      //     error: function () {
      //         // Fail message
      //         $('#success').html("<div class='alert alert-danger'>");
      //         $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
      //             .append("</button>");
      //         $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
      //         $('#success > .alert-danger').append('</div>');
      //         //clear all fields
      //         $('#contactForm').trigger("reset");
      //     },
      // })
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
  $('#success').html('');
});
