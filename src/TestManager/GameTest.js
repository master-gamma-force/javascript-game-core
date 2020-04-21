import { assert } from 'chai';

class GameTest {
  /**
   * Create a new test with chai
   * @param {string} description description of test
   * @param {string} type chai method
   * @param {Object[]} params chai params of chai method
   */
  constructor(description, type, params) {
    this.description = description;
    this.test = (value) => {
      assert[type](value, ...params);
    };
  }
}

export default GameTest;
