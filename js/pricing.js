var pricingMod = {
    'priceHover': $('#pricingCont .cont>div').hover(function(){
        $(this).addClass('onHover');
    },
    function(){
        $(this).removeClass('onHover');
    }),
    'init': function(){

    }
};

pricingMod.init();