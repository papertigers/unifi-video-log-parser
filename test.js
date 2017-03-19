var test = require('./index');

var logline = '1489894605.034 2017-03-19 03:36:45.034/UTC: INFO   Camera[F09FC213C2B1] MOTION STARTED (FrontYard) recording:58cdfccd84aeda172faca267 for motion:46 clockOffset:-93861100 in app-event-bus-28';

console.log(test(logline));
