const https = require('https')

function getHTML(options, callback) {
    https.get(options, res => {
        res.setEncoding('utf-8')
        let fullData = ''

        res.on('data', data => fullData += data)
        res.on('end', () => callback(fullData))
    })
}

function printHTML(html) {
    console.log(html)
}

const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
}

getHTML(requestOptions, printHTML)