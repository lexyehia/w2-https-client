const https = require('https')

function getAndPrintHTML() {
    const requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    }

    https.get(requestOptions, res => {
        res.setEncoding('utf-8')
        let fullData = ''

        res.on('data', data => fullData += data)
        res.on('end', () => console.log(fullData))
    })
}

getAndPrintHTML()