/**
 * Created by loldongs on 9/29/14.
 */

//Default main Module
var mainModule = {
    //Handles scrolling down and up on the nav menu
    scrollLinkClick: $('.mainNavTop .scroll-link').on('click', function (event) {
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        mainModule.scrollToID('#' + sectionID, 420);
    }),
    //function called by above function
    scrollToID: function (id, speed, offSet){
        var targetOffset = $(id).offset().top - offSet;
        var mainNav = $('#main-nav');
        $('html,body').animate({scrollTop:targetOffset}, speed);
        if (mainNav.hasClass("open")) {
            mainNav.css("height", "1px").removeClass("in").addClass("collapse");
            mainNav.removeClass("open");
        }
    },
    //Handles mobile only menu toggles
    toggleMenu: $('.menuToggle a').on('click', function(e){
        e.preventDefault();
        $('.navbar-nav').slideToggle(500);
    }),
    'checkMobile': function(){
        return ($(window).width()<=480);
    },
    'checkNavPage': function(){
        return ($('body').hasClass('navTran'));
    },
    'urlGet': function () {
        var query_string = {};
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = pair[1];
                // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [ query_string[pair[0]], pair[1] ];
                query_string[pair[0]] = arr;
                // If third or later entry with this name
            } else {
                query_string[pair[0]].push(pair[1]);
            }
        }
        return query_string;
    }
};

var navMod = {
    'navChange': $(window).scroll(function(){
        if(mainModule.checkNavPage()){
            if(window.pageYOffset>100 && $(window).width()>768){
                $('#nav').addClass('onMove');
            }else{
                $('#nav').removeClass('onMove');
            }
        }
    }),
    'init': function(){
        if(!mainModule.checkNavPage()){
            $('#nav').addClass('onMoveStatic');
        }
    }
};

navMod.init();
