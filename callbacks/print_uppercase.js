const getHTML = require('../step5')

const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
}

function printHTMLUppercase(html) {
    console.log(html.toUpperCase())
}

getHTML(requestOptions, printHTMLUppercase)