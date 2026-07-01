'use strict'

// returns the first non-undefined argument
module.exports = (...args) => {
  // the last argument gives top-level variables
  if (args.length < 3) throw new Error('or helper expects at least 2 arguments')
  let result = undefined;
  for (let i = 0; i < args.length - 1; i++) {
    result = args[i];
    if (result) return result;
  }
}

