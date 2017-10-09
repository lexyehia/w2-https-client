const getHTML = require('../step5')

const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
}

function printHTMLReversed(html) {
    console.log(html.split('').reverse().join(''))
}

getHTML(requestOptions, printHTMLReversed)