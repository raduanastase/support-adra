var Handlebars = require('hbsfy/runtime');

Handlebars.registerHelper({
    sif: function (boolean, trueString, falseString) {
        return boolean ? trueString : falseString;
    },
    eq: function (val1, val2) {
        return val1 == val2;
    }
});
