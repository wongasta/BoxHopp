var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var fs = require('fs');

var app = express();
var transporter = nodemailer.createTransport();
var port = process.env.PORT || 8000;

var envMod = {
        'init': function () {
            var args = [];
            process.argv.forEach(function (val, index, array) {
                args.push(val);
            });
            if (args[2] === 'dev') {
                envParam.env = 'dev';
            }
            this.contactParam();
        },
        'contactParam': function () {
            switch (envParam.env) {
                case 'dev':
                    envParam.email.contact = 'yxia@utexas.edu';
                    break;
                default:
                    envParam.email.contact = 'thegreatone150@gmail.com';
            }
        },
        'formatPath': function getCurrentDirectoryName(addPath) {
            return '/'+__dirname.split('/').slice(__dirname.split('/').indexOf('public_html')+1, __dirname.length).join('/')+addPath;
        }
    };

var envParam = {
    'env': 'prod',
    'email': {
        'from': 'info@boxhopp.com',
        'contact': 'thegreatone150@gmail.com'
    }
};

envMod.init();
console.log('Currently running on -' + envParam.env);
console.log('Email will be sent to -' + envParam.email.contact);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(function (req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
});

app.post(envMod.formatPath('/contact'), function (req, res) {
    var contactMod = require('./contact.js');
    contactMod.init(req, res, transporter, fs, envParam);
});

app.post(envMod.formatPath('/signup'), function (req, res) {
    var signupMod = require('./signup.js');
    signupMod.init(req, res, transporter, fs, envParam);
});

app.get(envMod.formatPath('/test'), function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send({'status': 'success'});
});


app.listen(port);
console.log('Sever started on port ' + port);
