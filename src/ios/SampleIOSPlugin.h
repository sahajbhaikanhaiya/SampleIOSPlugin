#import <Cordova/CDVPlugin.h>
#import "UICKeyChainStore.h"

@interface SampleIOSPlugin : CDVPlugin{
}

- (void) echoSum:(CDVInvokedUrlCommand *) command;

@end
