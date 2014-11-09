<!DOCTYPE html>
<html>
<head>
    <title>BoxHop</title>
    <link rel="stylesheet" type="text/css" href="_css/bootstrap/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="stylesheets/styles.css"/>
    <link rel="stylesheet" type="text/css" href="stylesheets/contact.css"/>

    <meta name="viewport" content="width=device-width, user-scalable=no"/>

    <?php include 'inc/header.inc'; ?>
</head>
<body>

<?php include 'inc/menu.inc'; ?>

<div id="contactCont">
    <div class="row">
        <div class="callbackCont callback">
            <h1 class="big"></h1>

            <h3 class="small"></h3>
        </div>
    </div>
    <div class="contactFormCont">
        <div class="row">
            <h1>Contact Us</h1>

            <h3>We care about the shit you have to say</h3>

            <div class="formContainer">
                <form name="contactForm" id="contactForm">
                    <div class="errors"></div>
                    <div class="topContent">
                        <ul class="list-unstyled">
                            <li><input type="text" name="firstName" maxlength="30" placeholder="First Name"/></li>
                            <li><input type="text" name="lastName" maxlength="30" placeholder="Last Name"/></li>
                            <li><input type="text" name="email" maxlength="40" placeholder="youremail@domain.com"/></li>
                            <li><input type="text" name="telephone" maxlength="30" placeholder="555-555-5555"/></li>
                        </ul>
                    </div>
                    <div class="bodyCont">
                        <ul class="list-unstyled botSubmit">
                            <li>
                                <textarea rows="4" cols="50" name="details"
                                          placeholder="Add anything you want here!"></textarea>
                            </li>
                            <li>
                                <input type="submit" value="Contact Us!" name="formSubmit"/>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="info">
        <div class="row">
            <h3>Reach Us Directly</h3>

            <p>General Support: (330) 275-3645</p>

            <p>General Support: <a href="mailto:support@boxhopp.com">support@boxhopp.com</a></p>

            <p>Technical Support: <a href="mailto:boxhoppteam@boxhopp.com">boxhoppteam@boxhopp.com</a></p>
        </div>
    </div>
</div>

<?php include 'inc/footer.inc'; ?>

<script src="_js/jquery/jquery.js"></script>
<script src="_js/jquery-ui/jquery-ui.js"></script>
<script src="_js/jquery-waypoints/waypoints.js"></script>
<script src="_js/validatejs/validate.js"></script>
<script src="_js/jquery-placeholder/jquery.placeholder.js"></script>
<script src="js/jumpSlides.js"></script>
<script src="js/scripts.js"></script>
<script src="js/contact.js"></script>
</body>