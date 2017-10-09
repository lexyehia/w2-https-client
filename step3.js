const https = require('https')

function getAndPrintHTML(options) {
    https.get(options, res => {
        res.setEncoding('utf-8')
        let fullData = ''

        res.on('data', data => fullData += data)
        res.on('end', () => console.log(fullData))
    })
}

const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
}

getAndPrintHTML(requestOptions)