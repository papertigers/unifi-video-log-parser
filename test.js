var test = require('./index');

var motionlog = '1489894605.034 2017-03-19 03:36:45.034/UTC: INFO   Camera[F09FC213C2B1] MOTION STARTED (FrontYard) recording:58cdfccd84aeda172faca267 for motion:46 clockOffset:-93861100 in app-event-bus-28';
var recordinglog = '1489991988.610 2017-03-20 06:39:48.610/UTC: INFO   Camera[F09FC213C2B1] (FrontYard) ADDING motionRecording:58cf79340cf2edb06df5202e, open#:1 prepadding#:0 in app-event-bus-2';

console.log(test(motionlog));
console.log(test(recordinglog));

//Test with spaces in camera names
var motionlog = '1490296657.085 2017-03-23 19:17:37.085/UTC: INFO   Camera[F09FC22FDF80] MOTION STARTED (Front Porch) recording:58d41f510cf2edb06df52b0b for motion:35 clockOffset:-9427 in app-event-bus-6';
var recordinglog = '1490296657.084 2017-03-23 19:17:37.084/UTC: INFO   Camera[F09FC22FDF80] (Front Porch) ADDING motionRecording:58d41f510cf2edb06df52b0b, open#:1 prepadding#:0 in app-event-bus-6';

console.log(test(motionlog));
console.log(test(recordinglog));

//Unknown log line
var unknown = '1490295337.626 2017-03-23 18:55:37.626/UTC: INFO   Camera[F09FC22FDF80] (FrontPorch) Reset clock offset for channel:1 in app-event-bus-21';

test(unknown);
