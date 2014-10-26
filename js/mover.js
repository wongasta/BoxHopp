var moverMain = {
    'resizeSplash': function () {
        if ($(window).height() >= 680) {
            var userHeight = $(window).height() + 1;
        } else if ($(window).width() <= 420) {
            var userHeight = $(window).height() + 1;
        } else {
            var userHeight = 680;
        }
        $('#moverHead').css({'height': userHeight});

        var phHeight = ($(window).height() - ($('.mainLogo').height() + $('.arrowCont').height())) / 2;
        if ($(window).width() >= 420) {
            $('#moverHead .placeHolderDiv').css({'height': phHeight});
        }
    },
    'arrowClick': $('#moverHead .arrowCont a').on('click', function (e) {
        var targetOffset = $('.laptopDiv').offset().top;
        $('html,body').animate({scrollTop:targetOffset}, 420);
        e.preventDefault();
    }),
    'init': function () {
        this.resizeSplash();
    }
};

var moverContent ={
    'custom1Pop': $('.customContainer').waypoint(function() {
        $('.custom1').animate({
            top: 0
        }, 500);
        $('.custom2').animate({
            top: 0
        }, 700);
        $('.custom3').animate({
            top: 0
        }, 900);
    }, {offset: (mainModule.checkMobile() ? 700 : 800)})
}


moverMain.init();