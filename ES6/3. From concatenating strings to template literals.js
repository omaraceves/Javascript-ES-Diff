//As seen on: https://exploringjs.com/es6/ch_core-features.html#sec_from-str-concat-to-tmpl-lit

//String Interpolation
//In ES5, you put values into strings by concatenating those values and string fragments:

function printCoord(x, y) {
    console.log('('+x+', '+y+')');
}

printCoord(23, 25); //(23, 25)

//In ES6 you can use string interpolation via template literals:

function printCoord(x, y) {
    console.log(`(${x}, ${y})`);
}

printCoord(23, 35); //(23, 35)


//Multi-line strings
//Template literals also help with representing multi-line strings.
// this is what you have to do to represent one in ES5:

var HTML5_SKELETON_ES5 =
    '<!doctype html>\n' +
    '<html>\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title></title>\n' +
    '</head>\n' +
    '<body>\n' +
    '</body>\n' +
    '</html>\n';

    //or

    var HTML5_SKELETON_ES5_2 = '\
    <!doctype html>\n\
    <html>\n\
    <head>\n\
        <meta charset="UTF-8">\n\
        <title></title>\n\
    </head>\n\
    <body>\n\
    </body>\n\
    </html>';

    //with ES6

    const HTML5_SKELETON_ES6 = `
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
</body>
</html>`;

    console.log(HTML5_SKELETON_ES5);
    console.log(HTML5_SKELETON_ES6);

    // <!doctype html>
    // <html>
    // <head>
    //     <meta charset="UTF-8">
    //     <title></title>
    // </head>
    // <body>
    // </body>
    // </html>
    
    
    // <!doctype html>
    // <html>
    // <head>
    //     <meta charset="UTF-8">
    //     <title></title>
    // </head>
    // <body>
    // </body>
    // </html>