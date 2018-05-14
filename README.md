Install Plugman : 
```
npm install -g plugman
```

Create Plugin project : 
```
 plugman create --name <pluginName> --plugin_id <pluginID> --plugin_version <version> --path <directory-where-plugin-should-be-created>
```

Folder Structure :
```
Plugin Project Directory 	
|_________ plugin.xml
	|_________	www
	|	|_________ <plugin-name>.js
	|_________	src
	|	|_________ ios
	|	|	|_________<plugin-name>.h
	|	|	|_________<plugin-name>.m
```

Plugin.xml :
```
<?xml version='1.0' encoding='utf-8'?>
<plugin id=“<plugin-id>”
        version="0.0.1"
        xmlns="http://apache.org/cordova/ns/plugins/1.0">

    <name><plugin-name-here></name>

    <js-module
            name="<plugin-name-here>"
            src="www/<plugin-name-here>.js”>
	<!--clobbers target is the name of the object that will be saved in window to call our iOS code like window.SampleIOSPlugin.echoSum—>
        <clobbers target="<window-object-name-here>" />
    </js-module>

    <platform name="ios">
        <config-file target="config.xml" parent="/*">
            <feature name="<plugin-name-here>">
                <param name="ios-package" value="<plugin-name-here>" onLoad="true" />
            </feature>
        </config-file>
        <header-file src="src/ios/<plugin-name-here>.h/>
        <source-file src="src/ios/<plugin-name-here>.m"/>
    </platform>

</plugin>
```

<plugin-name>.h : 
```
#import <Cordova/CDVPlugin.h>

@interface <plugin-name-here> : CDVPlugin{
}

- (void) echoSum:(CDVInvokedUrlCommand *) command;

@end
```

<plugin-name>.m : 
```
#import "<plugin-name-here>.h"

@implementation <plugin-name-here>

- (void) echoSum: (CDVInvokedUrlCommand *) command{

    NSNumber *variable1 = [command.arguments objectAtIndex:0];
    NSNumber *variable2 = [command.arguments objectAtIndex:1];
    int sum = variable1.intValue + variable2.intValue;
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsInt:sum];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];

}

@end
```

<plugin-name>.js :
```
var exec = require('cordova/exec');

var PLUGIN_NAME = "<plugin-name-here>";

var <plugin-name-here> = {
    echoSum: function(success,firstInt,secondInt){
        exec(success, null, PLUGIN_NAME, 'echoSum', [firstInt,secondInt]);
    }
};

module.exports = <plugin-name-here>;
```

Add Plugin to Cordova project :
```
cordova plugin add <path-to-plugin-directory OR git-clone-repo-link> --save-dev
```
For example:
```
cordova plugin add https://github.com/sahajbhaikanhaiya/SampleIOSPlugin.git --save-dev
```

Call our method in JavaScript :
```
window.<plugin-name-here>.<function-name-here>(<pass-parameters-here>);
```
For example:
```
var onSuccess = function(result){
    console.log("The sum is : " result);
};
window.SampleIOSPlugin.echoSum(onSuccess,10,20);
```