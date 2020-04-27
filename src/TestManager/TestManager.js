import { assert } from 'chai';
import GameTest from './GameTest';
import Logger from './Logger';

class TestManager {
  /**
   * Test Manager
   * @param {Object[]} dataTest data of test
   * @param {string} dataTest.description description of test
   * @param {String} dataTest.type type chai method
   * @param {String} dataTest.value chai param value
   * @param {Object[]} dataTest.params chai params of chai method
   */
  constructor(dataTest) {
    if (!dataTest.length) {
      this.tests = null;
    } else {
      const isNull = !dataTest.reduce((acu, cur) => (acu
        && cur.description
        && cur.type
        && cur.value
        && cur.params
      ), true);

      if (isNull) {
        this.tests = null;
        throw new Error('Test no have the structure of GameTest class');
      } else {
        try {
          this.tests = dataTest.map((test) => new GameTest(test));
        } catch (err) {
          throw new Error(`Can't load test: ${err}`);
        }
      }
    }

    this.log = new Logger();
  }

  /**
   * Run all test
   * @param {Object[]} values Values to test
   */
  run(value) {
    if (!this.tests) {
      throw new Error("There isn't test");
    }

    this.log.clear();

    this.tests.forEach((test) => {
      try {
        test.test(value);

        this.log.newLog({
          test: test.description,
          pass: true,
        });
      } catch (err) {
        this.log.newErr({
          test: test.description,
          pass: false,
          err,
        });
      }
    });
    return !this.errors;
  }
}

export default TestManager;
