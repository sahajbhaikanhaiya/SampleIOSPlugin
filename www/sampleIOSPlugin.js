var exec = require('cordova/exec');

var PLUGIN_NAME = "SampleIOSPlugin";

var SampleIOSPlugin = {

    // echoSum: function(firstInt,secondInt, success, error){
    //     exec(success, error, PLUGIN_NAME, 'coolMethod', [firstInt,secondInt]);
    // }

    echoSum: function(firstInt,secondInt){
        exec(null, null, PLUGIN_NAME, 'echoSum', [firstInt,secondInt]);
    }

};

module.exports = SampleIOSPlugin;