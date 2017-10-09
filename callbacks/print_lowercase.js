const getHTML = require('../step5')

const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
}

function printHTMLLowercase(html) {
    console.log(html.toLowerCase())
}

getHTML(requestOptions, printHTMLLowercase)