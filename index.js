var assert = require('assert-plus');
var VError = require('verror');

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

var motion_re = /(^\d+\.\d{3}) .+Camera\[(.*)\] MOTION (STARTED|STOPPED) \((.*)\) recording\:([a-z0-9]+\b)/;
var recording_re = /(^\d+\.\d{3}) .+Camera\[(.*)\] \((.*)\) (ADDING|CLOSING) motionRecording\:([a-z0-9]+\b)/;

function parseRecordingEvent(log) {
    logsplit = log.match(recording_re);
    assert.array(logsplit, 'Unexpected log line format');

    var uevent = {};
    uevent.camera_id = logsplit[2];
    uevent.event = logsplit[4];
    uevent.camera_desc = logsplit[3];
    uevent.recording_id = logsplit[5];
    uevent.timestamp = new Date(+logsplit[1].replace('.', ""));

    return uevent;

}

function parseMotionEvent(log) {
    logsplit = log.match(motion_re);
    assert.array(logsplit, 'Unexpected log line format');

    var uevent = {};
    uevent.camera_id = logsplit[2];
    uevent.event = logsplit[3];
    uevent.camera_desc = logsplit[4];
    uevent.recording_id = logsplit[5]
    uevent.timestamp = new Date(+logsplit[1].replace('.', ""));

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
    throw new VError({
        'name': 'UnknownEvent',
        'info': {
            'log_line': log
        }
    }, 'failed to parse log event');
}

module.exports = logToEvent;
