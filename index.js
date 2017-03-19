var assert = require('assert-plus');

 // Define log offsets for values
var UTIMESTAMP = 0;
var UCAMERA = 4;
var UEVENT = 6;
var UCAMERADESC = 7;
var URECORDINGID = 8;

/*
 * UniFi Event
 * {
 *   camera_id: String,
 *   event: STARTED|ENDED,
 *   camera_desc: String,
 *   recording_id: String,
 *   timestamp: Date
 * }
 *
 */

function logToEvent(log) {
    assert.string(log, 'log line to parse');

    logsplit = log.split(/\s+/);

    var uevent = {};
    uevent.camera_id = logsplit[UCAMERA].match(/^Camera\[(.*)\]$/)[1];
    uevent.event = logsplit[UEVENT];
    uevent.camera_desc = logsplit[UCAMERADESC];
    uevent.recording_id = logsplit[URECORDINGID]
        .match(/^recording\:(.*)$/)[1]
    uevent.timestamp = new Date(+logsplit[UTIMESTAMP].replace('.', ""));

    return uevent;
}

module.exports = logToEvent;
