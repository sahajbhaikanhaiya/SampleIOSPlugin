#import <Cordova/CDVPlugin.h>

@interface SampleIOSPlugin : CDVPlugin{
}

- (void) echoSum:(CDVInvokedUrlCommand *) command;

@end
