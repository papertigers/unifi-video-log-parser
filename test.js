var test = require('./index');

var motionlog = '1489894605.034 2017-03-19 03:36:45.034/UTC: INFO   Camera[F09FC213C2B1] MOTION STARTED (FrontYard) recording:58cdfccd84aeda172faca267 for motion:46 clockOffset:-93861100 in app-event-bus-28';
var recordinglog = '1489899750.960 2017-03-19 05:02:30.960/UTC: INFO   Camera[F09FC213C2B1] (FrontYard) CLOSING motionRecording:58ce10da84aeda172faca26e in ChunkProcessingService-Executor-004'

console.log(test(motionlog));
console.log(test(recordinglog));
