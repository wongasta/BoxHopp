var contactMod = {
    'init': function(){
        var postContent = {
            'firstName': $("input[name='firstName']").val(),
            'lastName': $("input[name='lastName']").val(),
            'email': $("input[name='email']").val(),
            'telephone': $("input[name='telephone']").val(),
            'details': $("textarea[name='details']").val()
        }
        this.contactPOST(postContent);
        console.log(postContent);
    },
    'contactPOST': function(postContent){
        $.post('webs/contact', postContent)
            .done(function (data) {
                console.log(data);
                contactMod.success_callback(data);
            })
            .fail(function(data) {
                console.log(data);
                contactMod.fail_callback(data);
            });
    },
    'success_callback': function(data){
        $('.callbackCont .big').html('Success!');
        $('.callbackCont .small').html('Just sit back and relax until we reach out to you!');
        $('.contactFormCont').slideUp(500);
        $('.callbackCont').show(1000);
    },
    'fail_callback': function(){
        $('.callbackCont .big').html('Failed!');
        $('.callbackCont .small').html('Please contact our support staff!');
        $('.contactFormCont').slideUp(500);
        $('.callbackCont').show(1000);
    }
}

$('input, textarea').placeholder();
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
    event.preventDefault();
    if (errors.length > 0) {

        $('#contactCont .errors').html('');
        $.each(errors, function (k, v) {
            $('#contactCont .errors').append('<p>' + v.message + '</p>');
        });

        $('#contactCont .errors').slideDown();
    }else{
        contactMod.init();
    }
});

validator.registerCallback('valid_phone', function (value) {
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