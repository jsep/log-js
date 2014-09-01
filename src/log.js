/**
 * @autor juan.
 */

(function(exports){
  'use strict';

  /* Wraps an function/object with basic logging
  *
  * @param {string | object|function } target
  * @param {string} method - specific method to wrap
  * @param {object} opts - options
  * */

   function log ( /*arguments*/ ){

    var args = Array.prototype.slice.call(arguments);

    if (args.length === 1) {
      log();
    }
  }
})(window);