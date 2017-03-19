# unifi-video-log-parser
Parse UniFi recording logs into events

Example of parsing a UniFi log can be seen by running test.js

```bash
$ node test.js
{ camera_id: 'F09FC213C2B1',
  event: 'STARTED',
  camera_desc: '(FrontYard)',
  recording_id: '58cdfccd84aeda172faca267',
  timestamp: Sat Mar 18 2017 23:36:45 GMT-0400 (EDT) }
{ camera_id: 'F09FC213C2B1',
  event: 'CLOSING',
  camera_desc: '(FrontYard)',
  recording_id: '58ce10da84aeda172faca26e',
  timestamp: Sun Mar 19 2017 01:02:30 GMT-0400 (EDT) }
```
