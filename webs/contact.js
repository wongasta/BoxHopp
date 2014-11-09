exports.init = function (req, res, transporter, fs, envParam) {
    var contact = req.body;
    var contactStr = JSON.stringify(contact, null, 4);

    transporter.sendMail({
        from: envParam.email.from,
        to: envParam.email.contact,
        subject: 'Contact Inquiry: ' + contact.firstName + ' ' + contact.lastName,
        text: contactStr
    });
    res.setHeader('Content-Type', 'application/json');
    res.send(
        {
            'status': 'success',
            'dataSent': contact
        }
    );

    fs.readFile('./log/contact.json', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var currentLog = JSON.parse(data);
        currentLog.contacts.push(req.body);
        var writeData = JSON.stringify(currentLog, null, 4);

        fs.writeFile("./log/contact.json", writeData, function(err) {
            if(err) {
                return console.log(err);
            } else {
                console.log("A new record has been added to contact.json");
            }
        });
    });
};