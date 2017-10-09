const https = require('https')

module.exports = function getHTML(options, callback) {
    https.get(options, res => {
        res.setEncoding('utf-8')
        let fullData = ''

        res.on('data', data => fullData += data)
        res.on('end', () => callback(fullData))
    })
}