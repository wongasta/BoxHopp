<!DOCTYPE html>
<html>
<head>
    <title>BoxHop</title>
    <link rel="stylesheet" type="text/css" href="_css/bootstrap/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="stylesheets/styles.css"/>
    <link rel="stylesheet" type="text/css" href="stylesheets/moving.css"/>

    <meta name="viewport" content="width=device-width, user-scalable=no"/>

    <?php include 'inc/header.inc'; ?>
</head>
<body class="navTran">

<?php include 'inc/menu.inc'; ?>

<div id="mainHead">
    <div class="ph1 placeHolderDiv"></div>
    <div class="mainLogo">
        <div class="row">
            <img src="images/logo-main.png" alt="BoxHopp"/>

            <h1>Making Moving A Breeze</h1>

            <h2>Stay organized and get multiple quotes from moving companies</h2>
        </div>
    </div>
    <div class="ph2 placeHolderDiv"></div>
    <div class="selectContainer">
        <div class="row selRow">
            <div id="moving">
                <a href="#movingsel" class="moving-sel selbtn desktopOnly movingSelect">
                    <p class="small">You are </p>
                    <img src="images/icon-car.png" alt="moving"/>

                    <p class="big">Looking to move</p>
                </a>
                <a href="#movingsel" class="moving-sel-mob mobOnly movingSelect">
                    <p>I Need to Move</p>
                </a>
            </div>
            <div id="getapp" class="desktopOnly">
                <p><a href="https://play.google.com/store/apps/details?id=com.emya.boxhopp" class="android-sel"><img src="images/bar-android.png" alt="Android App"/></a></p>

                <p><!--<a href="#apl" class="iphone-sel"><img src="images/bar-apple.png" alt="Apple App"/></a>--></p>
            </div>
            <div id="mover">
                <a href="/movers" class="mover-sel selbtn desktopOnly">
                    <p class="small">You are </p>
                    <img src="images/icon-truck.png" alt="moving"/>

                    <p class="big">A moving company</p>
                </a>
                <a href="movers.html" class="mover-sel-mob mobOnly moverSelect">
                    <p>I move for others</p>
                </a>
            </div>
            <div id="getappmob" class="mobileOnly">
                <p><a href="https://play.google.com/store/apps/details?id=com.emya.boxhopp" class="android-sel"><img src="images/bar-android.png" alt="Android App"/></a></p>

                <p><!--<a href="#apl" class="iphone-sel"><img src="images/bar-apple.png" alt="Apple App"/></a>--></p>
            </div>
        </div>
    </div>
</div>

<div id="movingCon">
    <div class="block1">
        <div class="row textCont">
            <div class="text">
                <h2>Smart Moving Online</h2>

                <p>Keep Track of items while relocating</p>

                <p>Organize everything via pictures and videos</p>

                <p>Easy access to all boxes</p>
            </div>
        </div>
        <div class="jumpBox"></div>
    </div>
    <div class="block2">
        <div class="row">
            <p class="topText">Select tags that BoxHopp has already has given you or create your own. Even if you forget, the tags
                are searchable.</p>
            <p class="botText">Upload or Take a Photo, Video, or Tag</p>
        </div>

    </div>
    <div class="block3">
        <div class="row">
            <div class="appPop desktopOnly">
                <img class="phoneImg" src="images/phone-02.png" alt="Write your number" />
            </div>
            <div class="desc">
                <h3>How It Works</h3>
                <p>Your moving contents will be searchable with no hassle. Plus, you will keep your belongings safely organized on your mobile device.</p>
                <p>BoxHopp helps you keep track of all those things you usually overlook while relocating. Don't leave your toothbrush behind ever again!</p>
            </div>
            <div class="appPopMob mobOnly">
                <img class="phoneImg" src="images/phone-02.png" alt="Write your number" />
            </div>
        </div>

    </div>
    <div class="block4">
        <div class="row">
            <p class="topText">Hiring Movers?</p>
            <p class="botText">Send your move through BoxHopp.</p>
            <p class="botText">Get multiple quotes from dozens of moving companies with a few clicks.</p>
            <p class="botText">Accept or decline. It's that easy.</p>
        </div>

    </div>

    <div class="block5">
        <div class="row">
            <p class="topText">&#8220;I'm normally a very disorganized guy but a friend told me about this app right before I moved today and I tell you I've never had an easier time finding organizing things in my life&#8221;</p>
       </div>
    </div>
</div>

<?php include 'inc/footer.inc'; ?>

<script src="_js/jquery/jquery.js"></script>
<script src="_js/jquery-ui/jquery-ui.js"></script>
<script src="_js/jquery-waypoints/waypoints.js"></script>
<script src="js/jumpSlides.js"></script>
<script src="js/scripts.js"></script>
<script src="js/moving.js"></script>
</body>