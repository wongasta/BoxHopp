exports.init = function (req, res, transporter, fs, envParam) {
    var signup = req.body;
    var signupStr = JSON.stringify(signup, null, 4);

    transporter.sendMail({
        from: envParam.email.from,
        to: envParam.email.contact,
        subject: 'Signup Application: ' + signup.firstName + ' ' + signup.lastName,
        text: signupStr
    });
    res.setHeader('Content-Type', 'application/json');
    res.send(
        {
            'status': 'success',
            'dataSent': signup
        }
    );

    fs.readFile('./log/signup.json', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var currentLog = JSON.parse(data);
        currentLog.signups.push(req.body);
        var writeData = JSON.stringify(currentLog, null, 4);

        fs.writeFile("./log/signup.json", writeData, function(err) {
            if(err) {
                return console.log(err);
            } else {
                console.log("A new record has been added to signup.json");
            }
        });
    });
};