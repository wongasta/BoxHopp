/**
 * Created by loldongs on 9/29/14.
 */

//Default main Module
var movingMain = {
    'resizeSplash': function(){
        if($(window).height()>=680){
            var userHeight = $(window).height() +1;
        }else if(mainModule.checkMobile()){
            var userHeight = $(window).height() +1;
        }else{
            var userHeight = 680;
        }
        $('#mainHead').css({'height':userHeight});

        var phHeight = ($(window).height() - ($('.mainLogo').height() + $('.selectContainer').height()))/2;
        var phHeightMobile = ($(window).height() - ($('.mainLogo').height() + $('.selectContainer').height() + ($('#nav').height() + parseInt($('#nav').css('margin-bottom'))) ))/2;
        if(!mainModule.checkMobile()){
            $('#mainHead .placeHolderDiv').css({'height':phHeight});
        }else{
            $('#mainHead .placeHolderDiv').css({'height':phHeightMobile});
        }
    },
    'init': function(){
        this.resizeSplash();
    }
};

var mainSelMod = {
    'controlSel': $('.selectContainer .selbtn').hover(function(){
            $(this).parent().addClass('selOnFocus');
        },
        function(){
            $(this).parent().removeClass('selOnFocus');
        }),
    'movingSelect': $('.movingSelect').on('click', function(e){
        e.preventDefault();


        var offset = 50;
        if(mainModule.checkMobile()){
            offset = 0;
        }
        mainModule.scrollToID('#movingCon', 500, offset);


    }),
    'moverSelect': $('.moverSelect').on('click', function(e){
        e.preventDefault();
    })
};

var movingMod = {
    'phonePop': $('.block3').waypoint(function() {
        $('.phoneImg').animate({
            bottom: 0
        }, 500);
    }, {offset: (mainModule.checkMobile() ? 0 : 400)})
};


(function(){
    var contHeight = $(window).height();
    var offSet = 50;
    if(mainModule.checkMobile()){
        contHeight = 600;
        offSet = 50;
    }

    var config = {
        'containerHeight': contHeight,
        'mobileResWidth': 420,
        'mobileContainerHeight': 350,
        'horzMargin': 0,
        'mobileHorzMargin': 0,
        'imgBorder': 'none',
        'wpYOffset': offSet,
        'mobileImgReduce': 0.5,
        'mobileImgScrollRate': 5,
        'picInfo': {
            'picDir': 'images/pop/',
            'picList': {
                'c1r1': 'pop01.png',
                'c1r2': 'pop03.png',
                'c1r3': 'pop06.png',
                'c2r1': 'pop04.png',
                'c2r2': 'pop05.png',
                'c2r3': 'pop15.png',
                'c3r1': 'pop10.png',
                'c3r2': 'pop07.png',
                'c4r1': 'pop09.png',
                'c4r2': 'pop17.png',
                'c5r1': 'pop13.png',
                'c5r2': 'pop14.png',
                'c5r3': 'pop08.png',
                'c6r1': 'pop11.png',
                'c6r2': 'pop16.png',
                'c6r3': 'pop12.png',
                'c7r1': 'pop02.png'
            }
        },
        'mobileCol': [
            {
                'vertMargin': 5,
                'pics': [
                    {
                        'name': 'c7r1'
                    },
                    {
                        'name': 'c1r2'
                    },
                    {
                        'name': 'c2r1'
                    },
                    {
                        'name': 'c1r3'
                    },
                    {
                        'name': 'c3r2'
                    },
                    {
                        'name': 'c2r3'
                    },
                    {
                        'name': 'c6r2'
                    }
                ]
            },
            //Column 2
            {
                'vertMargin': 5,
                'pics': [
                    {
                        'name': 'c5r3'
                    },
                    {
                        'name': 'c4r1'
                    },
                    {
                        'name': 'c3r1'
                    },
                    {
                        'name': 'c6r3'
                    },
                    {
                        'name': 'c5r1'
                    },
                    {
                        'name': 'c5r2'
                    },
                    {
                        'name': 'c4r2'
                    }
                ]
            }
        ],
        'col': [
            {
                'animationTimeFunc': 'easeInExpo',
                'animationTimer': 500,
                'bounceTimer': 500,
                'bounceAttempts': 1,
                'bounceDistance': 100,
                'animationDelay': 0,
                'animationYOffset': 0,
                'vertMargin': -10,
                'responsiveHideLessThan': 1080,
                'pics': [
                    {
                        'name': 'c1r3'
                    },
                    {
                        'name': 'c1r2'
                    },
                    {
                        'name': 'c1r1'
                    }
                ]
            },
            {
                'animationTimeFunc': 'easeInExpo',
                'animationTimer': 500,
                'bounceTimer': 500,
                'bounceAttempts': 1,
                'bounceDistance': 100,
                'animationDelay': 100,
                'animationYOffset': 0,
                'vertMargin': -10,
                'responsiveHideLessThan': 400,
                'pics': [
                    {
                        'name': 'c2r3'
                    },
                    {
                        'name': 'c2r2'
                    },
                    {
                        'name': 'c2r1'
                    }
                ]
            },
            {
                'animationTimeFunc': 'easeInExpo',
                'animationTimer': 500,
                'bounceTimer': 500,
                'bounceAttempts': 1,
                'bounceDistance': 100,
                'animationDelay': 150,
                'animationYOffset': 0,
                'vertMargin': -10,
                'responsiveHideLessThan': -1,
                'pics': [
                    {
                        'name': 'c3r2'
                    },
                    {
                        'name': 'c3r1'
                    }
                ]
            },
            {
                'animationTimeFunc': 'easeInExpo',
                'animationTimer': 500,
                'bounceTimer': 500,
                'bounceAttempts': 1,
                'bounceDistance': 100,
                'animationDelay': 200,
                'animationYOffset': 0,
                'vertMargin': -10,
                'responsiveHideLessThan': 400,
                'pics': [
                    {
                        'name': 'c4r2'
                    },
                    {
                        'name': 'c4r1'
                    }
                ]
            },
            {
                'animationTimeFunc': 'easeInExpo',
                'animationTimer': 500,
                'bounceTimer': 500,
                'bounceAttempts': 1,
                'bounceDistance': 100,
                'animationDelay': 150,
                'animationYOffset': 0,
                'vertMargin': -10,
                'responsiveHideLessThan': 400,
                'pics': [
                    {
                        'name': 'c5r2'
                    },
                    {
                        'name': 'c5r1'
                    }
                ]
            },
            {
                'animationTimeFunc': 'easeInExpo',
                'animationTimer': 500,
                'bounceTimer': 500,
                'bounceAttempts': 1,
                'bounceDistance': 100,
                'animationDelay': 50,
                'animationYOffset': 0,
                'vertMargin': -10,
                'responsiveHideLessThan': 1080,
                'pics': [
                    {
                        'name': 'c6r3'
                    },
                    {
                        'name': 'c6r2'
                    },
                    {
                        'name': 'c6r1'
                    }
                ]
            }
        ]
    };

    movingMain.init();
    $('.jumpBox').populateShowcase(config);
})();

