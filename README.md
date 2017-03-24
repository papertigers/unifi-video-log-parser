# unifi-video-log-parser
Parse UniFi recording logs into events

Example of parsing a UniFi log can be seen by running test.js

```bash
$ node test.js
{ camera_id: 'F09FC213C2B1',
  event: 'STARTED',
  camera_desc: 'FrontYard',
  recording_id: '58cdfccd84aeda172faca267',
  timestamp: Sat Mar 18 2017 23:36:45 GMT-0400 (EDT) }
{ camera_id: 'F09FC213C2B1',
  event: 'ADDING',
  camera_desc: 'FrontYard',
  recording_id: '58cf79340cf2edb06df5202e',
  timestamp: Mon Mar 20 2017 02:39:48 GMT-0400 (EDT) }
{ camera_id: 'F09FC22FDF80',
  event: 'STARTED',
  camera_desc: 'Front Porch',
  recording_id: '58d41f510cf2edb06df52b0b',
  timestamp: Thu Mar 23 2017 15:17:37 GMT-0400 (EDT) }
{ camera_id: 'F09FC22FDF80',
  event: 'ADDING',
  camera_desc: 'Front Porch',
  recording_id: '58d41f510cf2edb06df52b0b',
  timestamp: Thu Mar 23 2017 15:17:37 GMT-0400 (EDT) }
=========ERROR=========
failed to parse log event
{ log_line: '1490295337.626 2017-03-23 18:55:37.626/UTC: INFO   Camera[F09FC22FDF80] (FrontPorch) Reset clock offset for channel:1 in app-event-bus-21' }
```
