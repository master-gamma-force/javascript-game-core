class Logger {
  constructor() {
    this.log = [];
    this.logErr = [];
  }

  /**
   * Add a new log
   * @param {Object} log Log info
   */
  newLog(log) {
    this.log.push(log);
  }

  /**
   * Add a new error
   * @param {Object} err err info
   */
  newErr(err) {
    this.log.push(err);
  }

  /**
   * @getter
   * @returns {Object[]} list of errors
   */
  get errors() {
    return this.logErr;
  }

  /**
   * @getter
   * @returns {Object[]} list of errors
   */
  get logs() {
    return this.log;
  }

  /**
   * Clean the logger
   */
  clear() {
    this.log = [];
    this.logErr = [];
  }
}

export default Logger;
