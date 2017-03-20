var test = require('./index');

var motionlog = '1489894605.034 2017-03-19 03:36:45.034/UTC: INFO   Camera[F09FC213C2B1] MOTION STARTED (FrontYard) recording:58cdfccd84aeda172faca267 for motion:46 clockOffset:-93861100 in app-event-bus-28';
var recordinglog = '1489991988.610 2017-03-20 06:39:48.610/UTC: INFO   Camera[F09FC213C2B1] (FrontYard) ADDING motionRecording:58cf79340cf2edb06df5202e, open#:1 prepadding#:0 in app-event-bus-2'

console.log(test(motionlog));
console.log(test(recordinglog));
