'use strict';

module.exports = {
    returnBody(status, code, msg, data = {}) {
        this.status = status;
        this.body = {
            code,
            msg,
            data
        }
    }
}
