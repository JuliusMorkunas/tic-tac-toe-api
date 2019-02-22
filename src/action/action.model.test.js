/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

const { expect } = require('chai');
const Action = require('./action.model');

describe('Action', () => {
  it('should be invalid if player is empty', done => {
    const action = new Action();

    action.validate(err => {
      expect(err.errors.player).to.exist;
      done();
    });
  });

  it('should be invalid if row is empty', done => {
    const action = new Action();

    action.validate(err => {
      expect(err.errors.row).to.exist;
      done();
    });
  });

  it('should be invalid if cell is empty', done => {
    const action = new Action();

    action.validate(err => {
      expect(err.errors.cell).to.exist;
      done();
    });
  });

  it('should be valid if timestamp is empty', done => {
    const action = new Action();

    action.validate(err => {
      expect(err.errors.timestamp).not.to.exist;
      done();
    });
  });
});
