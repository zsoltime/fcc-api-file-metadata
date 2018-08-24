'use strict';

const request = require('supertest');

const app = require('../app');

describe('Endpoints', () => {
  describe('GET / ', () => {
    it('should return the documentation', (done) => {
      request(app)
        .get('/')
        .expect('Content-Type', /html/)
        .expect(200)
        .then((res) => {
          expect(res.text).toEqual(expect.stringContaining('File Metadata'));
          done();
        });
    });
  });

  describe('POST /filedata', () => {
    it.skip('should return a JSON object with the file size, name and MIME type', () => {});

    it.skip('should return an error if no file is uploaded', () => {});

    it.skip('should return an error if field name is not upfile', () => {});
  });
});
