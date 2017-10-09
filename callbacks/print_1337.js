const getHTML = require('../step5')

const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/1337.html'
}

function printHTML1337(html) {
    html = html.replace(/er/gi, '0r')
               .replace(/you/gi, 'j00')
               .replace(/ck/gi, 'x')
               .replace(/a/gi, '4')
               .replace(/e/gi, '3')
               .replace(/l/gi, '1')
               .replace(/o/gi, '0')
               .replace(/t/gi, '7')

    console.log(html)
}

getHTML(requestOptions, printHTML1337)
