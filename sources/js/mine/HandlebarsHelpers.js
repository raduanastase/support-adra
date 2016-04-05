var Handlebars = require('hbsfy/runtime');

Handlebars.registerHelper('sif', function(boolean, trueString, falseString){
    return boolean ? trueString :  falseString;
});
