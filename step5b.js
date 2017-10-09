const getHTML = require('./step5')

const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
}

function printHTML(html) {
    console.log(html)
}

getHTML(requestOptions, printHTML)
