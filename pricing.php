<!DOCTYPE html>
<html>
<head>
    <title>BoxHop</title>
    <link rel="stylesheet" type="text/css" href="_css/bootstrap/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="stylesheets/styles.css"/>
    <link rel="stylesheet" type="text/css" href="stylesheets/pricing.css"/>

    <meta name="viewport" content="width=device-width, user-scalable=no"/>

    <?php include 'inc/header.inc'; ?>
</head>
<body>

<?php include 'inc/menu.inc'; ?>

<div id="pricingCont">
    <div class="row">
        <h1>Success Starts Here</h1>
        <h3>Perfect way to move and what not</h3>

        <div class="cont">
            <div class="box free green">
                <div class="title green">Free</div>
                <div class="plus">
                    <ul>
                        <li>Integrate your company into the BoxHopp database</li>
                        <li>Access to a pool of untapped clients (all users of BoxHopp)</li>
                        <li>A custom dashboard for your company to access bid requests</li>
                        <li>Ability to send quick bids to clients via BoxHopp</li>
                        <li>Save time by accessing client&rsquo;s items instantaneously online</li>
                    </ul>
                </div>
                <div class="signup">
                    <a href="signup" class="green">Sign Up</a>
                </div>
            </div>
            <div class="box premium blue">
                <div class="title blue">Premium</div>
                <div class="plus">
                    <ul>
                        <li><strong>All features included in the basic plan</strong></li>
                        <li>Custom branded mobile app for your own company</li>
                        <li>Customizable color scheme</li>
                        <li>Four hours per month of dedicated development time for features</li>
                        <li>Additional add-ons available for a fee</li>
                        <li>Funnel clients directly to your app for bids without having to worry about competitors</li>
                        <li>Ability to order additional features for a small fee</li>
                    </ul>
                </div>
                <div class="signup">
                    <a href="signup" class="blue">Sign Up</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="priceList">
    <div class="row">
        <h2>Try out the Premium Plan for 99 cents for the first month</h2>
        <h3>Your payment does not start until after the month trial period. You can cancel anytime</h3>
        <div class="plans">
            <ul class="list-unstyled">
                <li class="blueTop">
                    <h3>Standard</h3>
                    <h4>Standard Plan</h4>
                    <p class="price">FREE</p>
                    <h5>No Billing!</h5>
                    <a href="signup?plan=free" class="signup">Sign Up</a>
                </li>
                <li class="redTop">
                    <h3>Premium</h3>
                    <h4>Annual Plan</h4>
                    <p class="price">$135</p>
                    <h5>Billed Per Month</h5>
                    <a href="signup?plan=yearly" class="signup">Sign Up</a>
                </li>
                <li class="orangeTop">
                    <h3>Premium</h3>
                    <h4>Quarterly Plan</h4>
                    <p class="price">$195</p>
                    <h5>Billed Per Month</h5>
                    <a href="signup?plan=quarterly" class="signup">Sign Up</a>
                </li>
                <li class="greenTop">
                    <h3>Premium</h3>
                    <h4>Monthly Plan</h4>
                    <p class="price">$225</p>
                    <h5>Billed Per Month</h5>
                    <a href="signup?plan=monthly" class="signup">Sign Up</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<?php include 'inc/footer.inc'; ?>

<script src="_js/jquery/jquery.js"></script>
<script src="_js/jquery-ui/jquery-ui.js"></script>
<script src="_js/jquery-waypoints/waypoints.js"></script>
<script src="js/jumpSlides.js"></script>
<script src="js/scripts.js"></script>
<script src="js/pricing.js"></script>
</body>