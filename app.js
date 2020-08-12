const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const pug = require('pug')

app.use(express.json());
app.listen('2400', () => {console.log('server started on port 2400')})

//Nodemailer config
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'skyla.hamill12@ethereal.email',
        pass: 'xCRr3ARsnMwwUrYa5U'
    }
});

app.get('/email/text', (req, res) => {
    transporter.sendMail({
        from: '"moose" <me@moose.dev>',
        to: '"You there" <you@there.com>',
        subject: 'First email',
        text: 'Hello, nice to meet you'
    })
        .then(info => res.send(info))
        .catch(error => res.send(error))
})

app.get('/email/html', (req, res) => {
        transporter.sendMail({
            from: '"moose" <me@moose.dev>',
            to: '"You there" <you@there.com>',
            subject: 'Second email',
            html: '<h1>Hi again</h1> <p>This time we have used html!</p>'
        })
            .then(info => res.send(info))
            .catch(error => res.send(error))
})

app.get('/email/file', (req, res) => {
        let body = pug.renderFile('views/email.pug')
        transporter.sendMail({
            from: '"moose" <me@moose.dev>',
            to: '"You there" <you@there.com>',
            subject: 'Third email',
            html: body
        })
            .then(info => res.send(info))
            .catch(error => res.send(error))
})


module.exports = app;
