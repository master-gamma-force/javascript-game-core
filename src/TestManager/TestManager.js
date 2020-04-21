import { assert } from 'chai';
import GameTest from './GameTest';
import Logger from './Logger';

class TestManager {
  /**
   * Test Manager
   * @param {Object[]} dataTest data of test
   * @param {string} dataTest.description description of test
   * @param {String} dataTest.type type chai method
   * @param {Object[]} dataTest.params chai params of chai method
   */
  constructor(dataTest) {
    if (!dataTest.length) {
      this.tests = null;
    } else {
      const isNull = dataTest.reduce((acu, cur) => {
        return acu * Boolean(cur.description) * Boolean(cur.type) * Boolean(cur.params);
      }, 1);

      if (isNull) {
        this.tests = null;
        throw new Error('Test no have the structure of GameTest class');
      } else {
        try {
          this.tests = dataTest.map((test) => new GameTest(...test));
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
  run(values) {
    if (!this.tests) {
      throw new Error("There isn't test");
    }


    if (values.length !== this.tests.length) {
      throw new Error("The values don't  have the same length as test");
    }

    this.log.clear();

    this.tests.forEach((test, idx) => {
      try {
        test.test(values(idx));

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
