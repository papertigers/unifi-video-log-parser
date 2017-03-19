var assert = require('assert-plus');

 // Define log offsets for values
var MTIMESTAMP = 0;
var MCAMERA = 4;
var MEVENT = 6;
var MCAMERADESC = 7;
var MRECORDINGID = 8;

var RTIMESTAMP = 0;
var RCAMERA = 4;
var REVENT = 6;
var RCAMERADESC = 5;
var RRECORDINGID = 7;

/*
 * UniFi Event
 * {
 *   camera_id: String,
 *   event: STARTED|ENDED|ADD|CLOSING,
 *   camera_desc: String,
 *   recording_id: String,
 *   timestamp: Date
 * }
 *
 */

function parseRecordingEvent(log) {
    logsplit = log.split(/\s+/);

    var uevent = {};
    uevent.camera_id = logsplit[RCAMERA].match(/^Camera\[(.*)\]$/)[1];
    uevent.event = logsplit[REVENT];
    uevent.camera_desc = logsplit[RCAMERADESC];
    uevent.recording_id = logsplit[RRECORDINGID]
        .match(/^motionRecording\:(.*)$/)[1]
    uevent.timestamp = new Date(+logsplit[RTIMESTAMP].replace('.', ""));

    return uevent;

}

function parseMotionEvent(log) {
    logsplit = log.split(/\s+/);

    var uevent = {};
    uevent.camera_id = logsplit[MCAMERA].match(/^Camera\[(.*)\]$/)[1];
    uevent.event = logsplit[MEVENT];
    uevent.camera_desc = logsplit[MCAMERADESC];
    uevent.recording_id = logsplit[MRECORDINGID]
        .match(/^recording\:(.*)$/)[1]
    uevent.timestamp = new Date(+logsplit[MTIMESTAMP].replace('.', ""));

    return uevent;
}

function logToEvent(log) {
    assert.string(log, 'log line to parse');
    if (log.indexOf('MOTION') > -1) {
        return parseMotionEvent(log);
    }
    if (log.indexOf('motionRecording') > -1) {
        return parseRecordingEvent(log);
    }
    throw new Error('Unexpected Event type');
}

module.exports = logToEvent;
