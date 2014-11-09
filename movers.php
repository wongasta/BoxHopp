<!DOCTYPE html>
<html>
<head>
    <title>BoxHop</title>
    <link rel="stylesheet" type="text/css" href="_css/bootstrap/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="stylesheets/styles.css"/>
    <link rel="stylesheet" type="text/css" href="stylesheets/mover.css"/>

    <meta name="viewport" content="width=device-width, user-scalable=no"/>

    <?php include 'inc/header.inc'; ?>
</head>
<body class="navTran">

<?php include 'inc/menu.inc'; ?>

<div id="moverHead">
    <div class="ph1 placeHolderDiv"></div>
    <div class="mainLogo">
        <div class="row">
            <img src="images/logo-main.png" alt="BoxHopp"/>

            <h2>Making Moving A Breeze</h2>

            <h1>We help you get the clients you need</h1>

        </div>
    </div>
    <div class="ph2 placeHolderDiv"></div>

    <div class="arrowCont">
        <a href="#"><img src="images/arrow.png" alt="arrow"/></a>
    </div>
</div>

<div class="laptopDiv">
    <div class="row">
        <h2>Receive your client's inventory digitally. Send them quotes through your free BoxHopp dashboard.</h2>

        <div class="laptop"><img src="images/laptop.png" alt="MacBook"/></div>
    </div>
</div>

<div class="customDiv">
    <div class="row">
       <h2>Your own customizable mobile app</h2>
        <div class="leftCol">
            <p>Employees can do a quick inventory list for those long distant moves</p>
            <p>Add features that will make your business</p>
        </div>
        <div class="rightCol customContainer">
            <img src="images/custom1.png" alt="Custom App" class="custom1"/>
            <img src="images/custom2.png" alt="Custom App" class="custom2"/>
            <img src="images/custom3.png" alt="Custom App" class="custom3"/>
        </div>
    </div>
</div>

<div id="twoDiv">
    <div class="bg">
        <div class="left">
            <div class="content">
                <p>Don't need a in house app?
                    <br /> <br />
                    How about one for the Android and iOS marketplaces.</p>
                <img src="images/customleft.png" alt="Customized App" />
            </div>
        </div>
        <div class="right">
            <div class="content">
                <p>Have your own exclusive features for your company's app.</p>
                <img src="images/customright.png" alt="Your Company App" />
            </div>
        </div>
    </div>
</div>

<div class="ctaDiv">
    <div class="row">
        <h2>Everything on the app is customizable, and the dashboard allows for easy viewing.</h2>

        <div class="choice row desktopOnly">
            <div class="left">
                <a href="signup" class="signup">Sign Up Now</a>
            </div>
            <div class="right">
                <a href="pricing" class="pricing">See Pricing</a>
            </div>
        </div>
        <div class="choiceMob row mobOnly">
            <a href="signup" class="signup">Sign Up</a>
            <a href="pricing" class="pricing">Pricing</a>
        </div>
    </div>
</div>

<?php include 'inc/footer.inc'; ?>


<script src="_js/jquery/jquery.js"></script>
<script src="_js/jquery-ui/jquery-ui.js"></script>
<script src="_js/jquery-waypoints/waypoints.js"></script>
<script src="js/jumpSlides.js"></script>
<script src="js/scripts.js"></script>
<script src="js/mover.js"></script>
</body>