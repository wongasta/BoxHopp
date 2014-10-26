
var validator = new FormValidator('contactForm', [
    {
        name: 'firstName',
        display: 'First Name',
        rules: 'required'
    },
    {
        name: 'lastName',
        display: 'Last Name',
        rules: 'required'
    },
    {
        name: 'email',
        display: 'Email',
        rules: 'required|valid_email'
    },
    {
        name: 'telephone',
        rules: 'callback_valid_phone'
    }
], function (errors, event) {
    if (errors.length > 0) {
        console.log(errors);
        $('#contactCont .errors').html('');
        $.each(errors, function (k, v) {
            $('#contactCont .errors').append('<p>' + v.message + '</p>');
        });
    }
});

validator.registerCallback('valid_phone', function (value) {
    console.log(value);
    var regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return (regex.test(value));
}).setMessage('valid_phone', 'Please enter a valid phone number.');

(function(){
    $('#contactCont .info').hover(function(){
        $(this).addClass('active');
    }, function(){
        $(this).removeClass('active');
    });
})();