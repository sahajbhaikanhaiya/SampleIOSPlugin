#import "SampleIOSPlugin.h"

@implementation SampleIOSPlugin

- (void) echoSum: (CDVInvokedUrlCommand *) command{
    NSNumber *variable1 = [command.arguments objectAtIndex:0];
    NSNumber *variable2 = [command.arguments objectAtIndex:1];

    int sum = variable1.intValue + variable2.intValue;
    
    NSLog(@"[echoSum] The sum is : %d",sum);
}

@end
