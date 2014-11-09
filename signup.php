<!DOCTYPE html>
<html>
<head>
    <title>BoxHop</title>
    <link rel="stylesheet" type="text/css" href="_css/bootstrap/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="stylesheets/styles.css"/>
    <link rel="stylesheet" type="text/css" href="stylesheets/signup.css"/>

    <meta name="viewport" content="width=device-width, user-scalable=no"/>

    <?php include 'inc/header.inc'; ?>
</head>
<body>

<?php include 'inc/menu.inc'; ?>

<div id="contactCont">
<div class="contactFormCont">
<div class="row">
    <div class="callbackCont callback">
        <h1 class="big"></h1>

        <h3 class="small"></h3>
    </div>
</div>
<div class="row formContent">
<h1>Sign Up With BoxHopp</h1>

<h3>Questions? Call us at (330) 275-3645</h3>

<div class="formContainer">
<form name="signupForm" id="signupForm">
<div class="errors"></div>
<div class="topContent">
    <ul class="list-unstyled">
        <li><input type="text" name="firstName" maxlength="30" placeholder="First Name"/></li>
        <li><input type="text" name="lastName" maxlength="30" placeholder="Last Name"/></li>
        <li><input type="text" name="companyName" maxlength="50" placeholder="Company Name"/></li>
        <li><input type="text" name="mainCity" maxlength="50" placeholder="Headquarter City"/></li>
        <li><input type="text" name="email" maxlength="40" placeholder="youremail@domain.com"/></li>
        <li><input type="text" name="telephone" maxlength="30" placeholder="555-555-5555"/></li>
    </ul>
</div>
<div class="customAdd">
    <h3>Please add all the metropolitan areas you service</h3>

    <div class="addService">
        <a href="#" class="addButton"><img src="images/plusvector.png" alt="Plus Add"/> Location</a>
        <a href="#" class="minusButton"><img src="images/minusVector.png" alt="Minus Remove"/> Location</a>
    </div>
    <ul class="list-unstyled customList">
        <li class="hidden" id="phSelect">
            <select class="statePH">
                <option value="null" selected class="phOption">State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
        </li>
        <li class="hidden" id="phInput">
            <input type="text" maxlength="50" placeholder="City"/>
        </li>
        <li id="cSelect1">
            <select class="statePH" name="cSelect1">
                <option value="null" selected>State #1</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
        </li>
        <li id="cInput1">
            <input name="cInput1" type="text" maxlength="50" placeholder="City #1"/>
        </li>
    </ul>
</div>
<div class="pricingCont">
    <h3>Pricing Options</h3>

    <ul class="list-unstyled">
        <li>
            <div class="radiocheck">
                <input id="freePlan" type="radio" name="c_plan" value="free"/>
                <label for="freePlan">Free</label>
            </div>
            <div class="desc">
                <h3>Free!</h3>

                <p>The first month is free. After the first month of free trial we will provide you with option to
                    continue or stop service.</p>
            </div>
        </li>
        <li>
            <div class="radiocheck">
                <input id="yearlyPlan" type="radio" name="c_plan" value="yearly"/>
                <label for="yearlyPlan">Yearly</label>
            </div>
            <div class="desc">
                <h3>$135/Month</h3>

                <p>First month is free. You will get billed every year. This package will save you 60% compared to
                    paying month-to-month.</p>
            </div>
        </li>
        <li>
            <div class="radiocheck">
                <input id="quarterlyPlan" type="radio" name="c_plan" value="quarterly"/>
                <label for="quarterlyPlan">Quarterly</label>
            </div>
            <div class="desc">
                <h3>$195/Month</h3>

                <p>First month is free. You will get billed every year. This package will save you 60% compared to
                    paying month-to-month.</p>
            </div>
        </li>
        <li>
            <div class="radiocheck">
                <input id="monthlyPlan" type="radio" name="c_plan" value="monthly"/>
                <label for="monthlyPlan">Monthly</label>
            </div>
            <div class="desc">
                <h3>$225/Month</h3>

                <p>First month is free. You will get billed every year. This package will let you cancel every beginning
                    of the month.</p>
            </div>
        </li>
    </ul>

</div>
<div class="bodyCont">
    <p class="infoBox">All done? Click the button below to submit your info to a BoxHopp representative. Due to the
        application is still in beta phase our representative will have to reach you out regarding the payments.</p>


    <div class="errors"></div>

    <ul class="list-unstyled botSubmit">
        <li>
            <textarea rows="4" cols="50" name="freeForm"
                      placeholder="Add any comments you might have here!"></textarea>
        </li>
        <li>
            <input type="submit" value="Sign Up!" name="formSubmit"/>
        </li>
    </ul>
</div>
</form>
</div>
</div>
</div>
</div>

<?php include 'inc/footer.inc'; ?>

<script src="_js/jquery/jquery.js"></script>
<script src="_js/jquery-ui/jquery-ui.js"></script>
<script src="_js/jquery-waypoints/waypoints.js"></script>
<script src="_js/validatejs/validate.js"></script>
<script src="_js/jquery-placeholder/jquery.placeholder.js"></script>
<script src="js/scripts.js"></script>
<script src="js/signup.js"></script>
</body>