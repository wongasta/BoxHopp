/*
 * JumpSlides.JS
 * version 1.0.0
 * author: Yixin Xia
 */
(function($){
    //Extend JQuery method to be used in front end views
    $.fn.populateShowcase = function(config){
        //Redefine this to the object of container Div user defined
        var containerDiv = this;
        //Contains useful reusable functions
        var reuse = {
            //Returns the list of pictures to be used throughout the script
            'countImages': function(obj){
                var count = 0;
                $.each(obj, function(i,v){
                    $.each(v.pics, function(){
                        count++;
                    });
                });
                return count;
            },
            //Returns total div width including margins and borders
            'measureContDivWidth': function(){
                var contMaxWidthNoMargin = 0;
                var totalColumns = 0;
                $.each(config.col, function(coli,colv){
                    if(config.col[coli].active){
                        totalColumns++;
                        var colMaxWidth = 0;
                        $.each(colv.pics, function(i,v){
                            if(config.col[coli].pics[i].width>colMaxWidth){
                                colMaxWidth=config.col[coli].pics[i].width;
                            }
                        });
                        contMaxWidthNoMargin+=colMaxWidth;
                    }
                });
                return {
                    'contWidth': contMaxWidthNoMargin+(config.horzMargin*(totalColumns-1)),
                    'totalCol': totalColumns
                }
            },
            //Check to see if window width is lesser than user defined
            'checkMobile': function(){
                return ($(window).width() <= config.mobileResWidth);
            },
            //Concat the dir with pic file name
            'returnImgURL': function(picName){
                return config.picInfo.picDir+config.picInfo.picList[picName];
            },
            //Is it odd or even
            'isItOdd': function(n){
                return (n%2 != 0);
            }
        };
        //Contains factories that initalizes the modules
        var initFactory = {
            //Preload all the images and call the callback function - either mobile or nonmobile
            'loadImages': function(){
                var totalImgNumber;
                var totalLoaded = 0;
                var configLoadObj;
                var callbackObj;
                if(reuse.checkMobile() && (config.mobileCol)){
                    configLoadObj = config.mobileCol;
                    callbackObj=mobileCont;
                    totalImgNumber = reuse.countImages(configLoadObj);
                }else{
                    configLoadObj = config.col;
                    callbackObj = mainCont;
                    totalImgNumber = reuse.countImages(configLoadObj);
                }

                $.each(configLoadObj, function(i,v){
                    var col = i;
                    configLoadObj[i].active=true;
                    $.each(v.pics, function(i,v){
                        var myImage = new Image();
                        var imageSrc = reuse.returnImgURL(configLoadObj[col].pics[i].name);
                        myImage.name = imageSrc;
                        myImage.onload = function(){
                            totalLoaded++;
                            v['width']=this.width;
                            v['height']=this.height;
                            if(totalLoaded===totalImgNumber){
                                callbackObj.afterLoadCallback();
                            }
                        };
                        myImage.src = imageSrc;
                        v['img'] = myImage;
                    });
                });
            }
        };
        //contains the mobile callback function after all images loads
        var mobileCont = {
            //Creates all the column divs and populate the config with more properties during the run time
            'afterLoadCallback': function(){
                $(containerDiv).addClass('galleryMobile');
                var contMaxWidthNoMargin = 0;
                $.each(config.mobileCol, function(coli,colv){
                    containerDiv.append('<div class="col' + coli + '"></div>');
                    var colHeight = 0;
                    var colMaxWidth = 0;
                    $.each(colv.pics, function(i,v){
                        $(containerDiv['selector'] + ' .col' + coli).append(config.mobileCol[coli].pics[i].img);
                        colHeight+=config.mobileCol[coli].pics[i].height;
                        if(config.mobileCol[coli].pics[i].width>colMaxWidth){
                            colMaxWidth=config.mobileCol[coli].pics[i].width;
                        }
                    });
                    colv['colMaxWidth']=colMaxWidth;
                    contMaxWidthNoMargin+=colMaxWidth;
                    colv['colHeight'] = colHeight;
                });
                config.mobileContMaxWidthNoMargin=contMaxWidthNoMargin*config.mobileImgReduce;
                config.mobileContMaxWidthWithMargin=contMaxWidthNoMargin*config.mobileImgReduce+(config.horzMargin*(config.mobileCol.length-1));
                this.formatContainer();
            },
            //Populate CSS classes for the container div and position it
            'formatContainer': function(){
                var totalWidth = config.mobileContMaxWidthWithMargin;
                $(containerDiv['selector']).css({
                    'overflow':'hidden',
                    'position':'relative',
                    'margin': '0 auto',
                    'width':totalWidth+'px',
                    'height':(config.mobileContainerHeight)+'px'
                });
                $(containerDiv['selector'] + '>div').css({
                    'position':'absolute',
                    'margin-right':config.horzMargin+'px'
                });
                $(containerDiv['selector'] + '>div:last-child').css({
                    'margin-right':'0'
                })
                this.formatCol();
            },
            //Fornat each columns in the container and position each one of them
            'formatCol': function(){
                $.each($(containerDiv['selector']+'>div'), function(i,v){

                    $.each($(v)[0].children, function(imgi,imgv){
                        $(imgv).css({
                            'margin-bottom': config.mobileCol[i].vertMargin,
                            'border': config.imgBorder,
                            'width': config.mobileCol[i].pics[imgi].width*config.mobileImgReduce+'px',
                            'height': config.mobileCol[i].pics[imgi].height*config.mobileImgReduce+'px'
                        });
                    });

                    var mobileXOffset = (config.mobileCol[i].colMaxWidth*config.mobileImgReduce)*i + config.mobileHorzMargin*i;
                    var mobileBottomOffset;
                    if(reuse.isItOdd(i+1)){
                        mobileBottomOffset = 0;
                    }else{
                        mobileBottomOffset = -((config.mobileCol[i].colHeight*config.mobileImgReduce) - (config.mobileContainerHeight));
                    }
                    $(v).css({
                        'width': config.mobileCol[i].colMaxWidth*config.mobileImgReduce,
                        'height': config.mobileCol[i].colHeight*config.mobileImgReduce,
                        'left': mobileXOffset,
                        'bottom': mobileBottomOffset+'px'
                    });
                });
                this.colSlideEffect();
            },
            //Controls the columns gliding up and down depending on the user scroll
            'colSlideEffect': function(){
                var prevScroll,newScroll= 0;
                var scrollAmount;
                $(window).scroll(function(){
                    newScroll = $(window).scrollTop();
                    if(newScroll>prevScroll){
                        scrollAmount = Number(config.mobileImgScrollRate);
                    }else{
                        scrollAmount = Number(-config.mobileImgScrollRate);
                    }
                    prevScroll = newScroll;
                    $.each($(containerDiv['selector']+'>div'), function(i,v){
                        var isOdd = reuse.isItOdd(i+1);
                        var currentBottom = Number($(v).css('bottom').replace(/[^-\d\.]/g, ''));
                        if(isOdd){
                            $(v).css({
                                'bottom': currentBottom-scrollAmount
                            });
                        }else{
                            $(v).css({
                                'bottom': currentBottom+scrollAmount
                            });
                        }
                    });
                });
            }
        };
        //Contains the main functions that runs after image loads for non-mobile
        var mainCont = {
            //Populates each columns in the container and values for config JSON object during run time
            'afterLoadCallback': function(){
                $(containerDiv).addClass('galleryNotMobile');
                var contMaxWidthNoMargin = 0;
                $.each(config.col, function(coli,colv){
                    containerDiv.append('<div class="col' + coli + '"></div>');
                    var colHeight = 0;
                    var colMaxWidth = 0;
                    $.each(colv.pics, function(i,v){
                        $(containerDiv['selector'] + ' .col' + coli).append(config.col[coli].pics[i].img);
                        colHeight+=config.col[coli].pics[i].height;
                        if(config.col[coli].pics[i].width>colMaxWidth){
                            colMaxWidth=config.col[coli].pics[i].width;
                        }
                    });
                    colv['colMaxWidth']=colMaxWidth;
                    contMaxWidthNoMargin+=colMaxWidth;
                    colv['colHeight'] = colHeight;
                    colv['animated'] = false;
                });
                config.contMaxWidthNoMargin=contMaxWidthNoMargin;
                config.contMaxWidthWithMargin=contMaxWidthNoMargin+(config.horzMargin*(config.col.length-1));
                this.formatContainer();
            },
            //Format the main container and position it
            'formatContainer': function(){
                var totalWidth = config.contMaxWidthWithMargin;
                $(containerDiv['selector']).css({
                    'overflow':'hidden',
                    'position':'relative',
                    'margin': '0 auto',
                    'width':totalWidth+'px',
                    'height':(config.containerHeight)+'px'
                });
                $(containerDiv['selector'] + '>div').css({
                    'position':'absolute',
                    'bottom':'0',
                    'margin-right':config.horzMargin+'px'
                });
                $(containerDiv['selector'] + '>div:last-child').css({
                    'margin-right':'0'
                });
                this.resizeFunc.onResizeInit();
                this.onResize();
                this.formatCol();
            },
            //Controls what happens when user resize the window
            'onResize': function(){
                var self=this;
                $(window).resize(function(){
                    self.resizeFunc.onResizeInit();
                });
            },
            //Contains various callback functions upon user resize
            'resizeFunc': {
                //Absolutely align the container Div to the center of the screen for the user
                'alignCenter': function(winWidth){
                    var contWidth = reuse.measureContDivWidth();
                    var leftXOffset = contWidth['contWidth'] - winWidth;
                    if (leftXOffset>0){
                        $(containerDiv).css({
                            'left': '-'+(leftXOffset/2)+'px'
                        });
                    }else{
                        $(containerDiv).css({
                            'left':'0px'
                        });
                    }
                },
                //Organize and position each columns based on how the user defined the responsive properties on each column
                'responsiveHide': function(winWidth){
                    var activeCols = 0;
                    var xOffset
                    $.each($(containerDiv['selector']+'>div'), function(i,v){
                        if(config.col[i].responsiveHideLessThan>=winWidth){
                            $(v).css({
                                'display':'none'
                            });
                            config.col[i].active=false;
                        }else{
                            config.col[i].active=true;
                            xOffset=config.col[i].colMaxWidth*activeCols + config.horzMargin*activeCols;
                            $(v).css({
                                'display':'block',
                                'left':xOffset+'px'
                            });
                            activeCols++;
                            var colYOffset = config.col[i].animationYOffset;
                            if(config.col[i].animated){
                                $(v).css({
                                    'bottom':'-'+colYOffset+'px'
                                })
                            }
                        }
                    });
                    var currentWidth = (config.col[config.col.length-1].colMaxWidth*activeCols + config.horzMargin*activeCols);
                    $(containerDiv).css({'width':currentWidth});
                },
                //Module initiator
                'onResizeInit': function(){
                    var winWidth = $(window).width();
                    this.responsiveHide(winWidth);
                    this.alignCenter(winWidth);
                }
            },
            //Format each columns and position them
            'formatCol': function(){
                $.each($(containerDiv['selector']+'>div'), function(i,v){

                    $.each($(v)[0].children, function(imgi,imgv){
                        $(imgv).css({
                            'margin-bottom': config.col[i].vertMargin +'px',
                            'border': config.imgBorder
                        });
                    });

                    $(v).css({
                        'bottom':'-'+(config.col[i].colHeight+(config.col[i].vertMargin*config.col[i].pics.length))+'px',
                        'width':config.col[i].colMaxWidth+'px'
                    });
                });
                this.animateBars();
            },
            //Handles the animations of the columns popping up and and bouncing
            'animateBars': function(){
                $.each($(containerDiv['selector']+'>div'), function(i,v){
                    //Get all the variables used for the animation
                    var duration = config.col[i].animationTimer;
                    var bounceDuration = config.col[i].bounceTimer;
                    var bounceAttempts = config.col[i].bounceAttempts;
                    var bounceDistance = config.col[i].bounceDistance;
                    var animationDelay = config.col[i].animationDelay;
                    var colHeight = config.col[i].colHeight;
                    var colYOffset = config.col[i].animationYOffset;
                    var bounceEffect = config.col[i].animationTimeFunc;
                    var toBounce = false;
                    if ((bounceDuration>0)||(bounceAttempts>0)||(bounceDistance>0)){
                        var toBounce = true;
                    }
                    //Uses Waypoint.Jquery.JS <- otherwise CODE WILL NOT RUN
                    $(containerDiv).waypoint(function(){
                        if(config.col[i].animated===false && config.col[i].active===true){
                            mainCont.bounceEffect.bounceUp($(v),colHeight,duration,toBounce,bounceDuration,bounceAttempts,animationDelay,colYOffset,bounceEffect,bounceDistance);
                        }
                        config.col[i].animated = true;
                    },{offset: config.wpYOffset});
                });
            },
            //bounces each of the columns.
            'bounceEffect': {
                'bounceUp': function(ele,colHeight,duration,toBounce,bounceDuration,bounceAttempts,animationDelay,YOffset,bounceEffect,bounceDistance){
                    $(ele).delay(animationDelay).animate({
                        'bottom':'+=' + (colHeight-YOffset)
                    }, {
                        'duration': duration,
                        'specialEasing': {
                            'bottom': bounceEffect
                        },
                        complete: function() {
                            if(toBounce){
                                //JQuery UI is needed - otherwise CODE WILL NOT RUN
                                $(ele).effect("bounce", { 'distance':bounceDistance,'times':bounceAttempts }, bounceDuration);
                            }
                        }
                    });
                }
            }
        };
        //Initialize the library upon user calling the library's extended method
        (function(){
            initFactory.loadImages();
        }());
    };
})(jQuery);