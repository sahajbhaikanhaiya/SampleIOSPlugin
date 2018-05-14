var exec = require('cordova/exec');

var PLUGIN_NAME = "SampleIOSPlugin";

var SampleIOSPlugin = {

    echoSum: function(success,firstInt,secondInt){
        exec(success, null, PLUGIN_NAME, 'echoSum', [firstInt,secondInt]);
    }

};

module.exports = SampleIOSPlugin;