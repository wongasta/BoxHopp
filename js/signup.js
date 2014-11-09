$('input, textarea').placeholder();

var signupMod = {
    'locationCounter': 1,
    'plusLocation': $('.addButton').on('click', function(e){
        e.preventDefault();
        var mainForm = $('#signupForm');
        var phSelect = mainForm.find('#phSelect');
        var phInput = mainForm.find('#phInput');

        var newSelect = phSelect.clone().appendTo('#signupForm .customList');
        var newInput = phInput.clone().appendTo('#signupForm .customList');

        signupMod.locationCounter++;

        newSelect.attr('id', 'cSelect'+signupMod.locationCounter).removeClass('hidden');
        newSelect.find('option.phOption').html('State #'+signupMod.locationCounter);

        newInput.attr('id', 'cInput'+signupMod.locationCounter).removeClass('hidden');
        newInput.find('input').attr('placeholder', 'City #'+signupMod.locationCounter);
    }),
    'minusLocation': $('.minusButton').on('click', function(e){
        e.preventDefault();
        if(signupMod.locationCounter>1){
            $('#cSelect'+signupMod.locationCounter).remove();
            $('#cInput'+signupMod.locationCounter).remove();
            signupMod.locationCounter--;
        }
    }),
    'init': function(){
        //Populate the values of the radio button based on GET value
        var planSelected = mainModule.urlGet().plan;
        if(planSelected){
            $('#' + planSelected + 'Plan').attr('checked','checked');
        }
    },
    'signupSubmit':{
        'init': function(){
            var postContent = {
                'firstName': $("input[name='firstName']").val(),
                'lastName': $("input[name='lastName']").val(),
                'companyName': $("input[name='companyName']").val(),
                'companyName': $("input[name='mainCity']").val(),
                'email': $("input[name='email']").val(),
                'telephone': $("input[name='telephone']").val(),
                'locations':[],
                'Plan': $("input[name='c_plan']:checked").val(),
                'freeForm': $("textarea[name='freeForm']").val()
            }

            for (var i= 0; i<signupMod.locationCounter; i++){
                var location = {
                    'state': $('#cSelect' + (i+1)).find('select').find(":selected").val(),
                    'city': $('#cInput' + (i+1)).find('input').val()
                }
                postContent.locations.push(location);
            }
            this.postSubmit(postContent);
        },
        'postSubmit': function(postContent){
            $.post('webs/signup', postContent)
                .done(function (data) {
                    console.log(data);
                    signupMod.signupSubmit.postSuccess();
                })
                .fail(function(data) {
                    console.log(data);
                    signupMod.signupSubmit.postFail();
                });
        },
        'postSuccess': function(){
            $('.callbackCont .big').html('Success!');
            $('.callbackCont .small').html('Just sit back and relax until we reach out to you!');
            $('.formContent').slideUp(500);
            $('.callbackCont').show(1000);

        },
        'postFail': function(){
            $('.callbackCont .big').html('Success!');
            $('.callbackCont .small').html('Just sit back and relax until we reach out to you!');
            $('.formContent').slideUp(500);
            $('.callbackCont').show(1000);
        }
    }
};

signupMod.init();

var validator = new FormValidator('signupForm', [
    {
        name: 'firstName',
        display: 'First Name',
        rules: 'required'
    },
    {
        name: 'lastname',
        display: 'Last Name',
        rules: 'required'
    },
    {
        name: 'companyname',
        display: 'Company Name',
        rules: 'required'
    },
    {
        name: 'mainCity',
        display: 'Primary City',
        rules: 'required'
    },
    {
        name: 'email',
        display: 'Email',
        rules: 'required|valid_email'
    },
    {
        name: 'cSelect1',
        display: 'Please fill all the locations',
        rules: 'callback_valid_loc'
    },
    {
        name: 'c_plan',
        display: 'Pricing Plan',
        rules: 'required'
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
        $('#contactCont .errors').hide();
        signupMod.signupSubmit.init();
    }
});

validator.registerCallback('valid_loc', function (value) {
    var output = true;
    for (var i= 1; i<signupMod.locationCounter+1; i++){
        var selVal = $('#cSelect' + i).find('select').find(":selected").val();
        var inpVal = $('#cInput' + i).find('input').val();
        if((!selVal || selVal==='null') || (!inpVal)){
            output = false;
        }
    }
    return output;
}).setMessage('valid_loc', 'Please enter in all the locations');

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
