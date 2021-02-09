var exec = require('cordova/exec');

var PLUGIN_NAME = 'Bubi';

var bubi = {
    init: function (cb) {
        exec(cb, null, PLUGIN_NAME, 'init');
    }
};

module.exports = bubi;
