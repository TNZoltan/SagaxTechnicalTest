var assert = require('assert');
let request = require('request');

describe('Stairs', function () {
  describe('Calculation', function () {
    it('Should return 6 for Example #1', function () {
      request.post(
        'http://localhost:3000/stairs', {
          Inputs: [
            17
          ],
          StepsPerStride: 3
        },
        function (error, response, body) {
          assert.equal(body.Result, 6)
        }
      );
    });
    it('Should return 14 for Example #2', function () {
      request.post(
        'http://localhost:3000/stairs', {
          Inputs: [
            17, 17
          ],
          StepsPerStride: 3
        },
        function (error, response, body) {
          assert.equal(body.Result, 14)
        }
      );
    });
    it('Should return 50 for Example #3', function () {
      request.post(
        'http://localhost:3000/stairs', {
          Inputs: [
            4, 9, 8, 11, 7, 20, 14
          ],
          StepsPerStride: 3
        },
        function (error, response, body) {
          assert.equal(body.Result, 50)
        }
      );
    });
  });
  describe('Validation', function () {
    it('should throw 403 on stride input lower than 0', function () {
      request.post(
        'http://localhost:3000/stairs', {
          Inputs: [
            17
          ],
          StepsPerStride: -3
        },
        function (error, response, body) {
          assert.equal(response.statusCode, 403)
        }
      );
    });
    it('should fail on flight array bigger than size of 20', function () {
      request.post(
        'http://localhost:3000/stairs', {
          Inputs: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21
          ],
          StepsPerStride: -3
        },
        function (error, response, body) {
          if (error)
            assert.ok()
        }
      );
    });
  });
});