var tpj2 = jQuery;

tpj2.noConflict();
tpj2(document).ready(function () {

  jQuery.validator.addMethod("namenew", function (value, element) {
    if (/^[^-\s][a-zA-Z_\s-]+$/.test(value)) {
      return true;
    } else {
      return false;
    };
  }, "Please enter atleast 2 words");

  jQuery.validator.addMethod("email", function (value, element) {
    if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(value)) {
      return true;
    } else {
      return false;
    };
  }, "Please Enter Valid Email");

  jQuery.validator.addMethod("number", function (value, element) {
    if (/^(\+\d{1,3}[- ]?)?\d{8,15}$/.test(value)) {
      return true;
    } else {
      return false;
    };
  }, "Please Enter Valid Mobile Number");





  tpj2('.form1').validate({
    rules: {
      name: {
        required: true,
        namenew: true,
      },
      cname: {
        required: true,
        namenew: true,
      },
      email: {
        required: true,
        email: true,
      },
      country: {
        required: true,
        namenew: true,
      },
      number: {
        required: true,
        number: true,
      },
      products: {
        required: true,
        namenew: true,
      },
      packagingtype: {
        required: true,

      },
      quantity: {
        required: true,

      },
      captcha: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'This filed is required',
        namenew: 'Please enter atleast 2 words',
      },
      products: {
        required: 'This filed is required',
        namenew: 'Please enter atleast 2 words',
      },
      cname: {
        required: 'This filed is required',
        namenew: 'Please enter atleast 2 words',
      },
      email: {
        required: 'This filed is required',
        email: 'Please Enter Valid Email Id',
      },
      city: {
        required: 'This filed is required',
        namenew: 'Please enter atleast 2 words',
      },
      number: {
        required: 'This filed is required',
        number: 'Please Enter Valid Mobile Number',
      },
      quantity: {
        required: 'This filed is required',

      },
      packagingtype: {
        required: 'This filed is required',

      },
      captcha: {
        required: 'This filed is required',
      },
    },

    submitHandler: function (form) { // <- pass 'form' argument in
      tpj2(".submit").val("Please Wait...").attr("disabled", true);
      form.submit(); // <- use 'form' argument here.
    },

    highlight: function (element, errorClass, validClass) {
      tpj2(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-ok').addClass('glyphicon-remove');
      tpj2(element).addClass(errorClass).removeClass(validClass);
      tpj2(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function (element) {
      tpj2(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-remove').addClass('glyphicon-ok');
      element.closest('.form-group').removeClass('has-error').addClass('has-success');
      tpj2(element).remove();
    }
  });



  tpj2('.form2').validate({
    rules: {
      name: {
        required: true,
        namenew: true,
      },
      email: {
        required: true,
        email: true,
      },
      city: {
        required: true,
        namenew: true,
      },
      number: {
        required: true,
        number: true,
      },

      captcha: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'This filed is required',
        namenew: 'Please enter atleast 2 words',
      },
      email: {
        required: 'This filed is required',
        email: 'Please Enter Valid Email Id',
      },
      city: {
        required: 'This filed is required',
        namenew: 'Please enter atleast 2 words',
      },
      number: {
        required: 'This filed is required',
        number: 'Please Enter Valid Mobile Number',
      },

      captcha: {
        required: 'This filed is required',
      },
    },

    submitHandler: function (form) { // <- pass 'form' argument in
      tpj2(".submit").val("Please Wait...").attr("disabled", true);
      form.submit(); // <- use 'form' argument here.
    },

    highlight: function (element, errorClass, validClass) {
      tpj2(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-ok').addClass('glyphicon-remove');
      tpj2(element).addClass(errorClass).removeClass(validClass);
      tpj2(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function (element) {
      tpj2(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-remove').addClass('glyphicon-ok');
      element.closest('.form-group').removeClass('has-error').addClass('has-success');
      tpj2(element).remove();
    }
  });


  tpj2('.form3').validate({
    rules: {
      name: {
        required: true,
        namenew: true,
      },
      cname: {
        required: true,
        namenew: true,
      },
      email: {
        required: true,
        email:true,
      },
      country: {
        required: true,
        namenew: true,
      },
      number: {
        required: true,
        number: true,
      },
      products: {
        required: true,
        namenew: true,
      },
      packagingtype: {
        required: true,
        
      },
      quantity: {
        required: true,
        
      },
      captcha: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'This filed is required',
        namenew: 'Please enter atleast 2 words',
      },
      cname: {
        required: 'This filed is required',
        namenew: 'Please enter atleast 2 words',
      },
      email: {
        required: 'This filed is required',
        email: 'Please Enter Valid Email Id',
      },
      city: {
        required: 'This filed is required',
        namenew: 'Please enter atleast 2 words',
      },
      number: {
        required: 'This filed is required',
        number: 'Please Enter Valid Mobile Number',
      },
      quantity: {
        required: 'This filed is required',
        
      },
      products: {
        required: 'This filed is required',
        namenew: 'Please enter atleast 2 words',
      },
      packagingtype: {
        required: 'This filed is required',
        
      },
      captcha: {
        required: 'This filed is required',
      },
    },

    submitHandler: function(form) { // <- pass 'form' argument in
            tpj2(".submit").val("Please Wait...").attr("disabled", true);
            form.submit(); // <- use 'form' argument here.
        },
    
    highlight: function(element, errorClass, validClass) { 
      tpj2(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-ok').addClass('glyphicon-remove');
      tpj2(element).addClass(errorClass).removeClass(validClass);
      tpj2(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function(element) {
      tpj2(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-remove').addClass('glyphicon-ok');
   element.closest('.form-group').removeClass('has-error').addClass('has-success');
      tpj2(element).remove();
    }
  });
});

