const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('saves a user', () => {

    // Create Instance of User Model
    const joe = new User({ name: 'Joe' });

    // Save user
    joe.save();
  });
});