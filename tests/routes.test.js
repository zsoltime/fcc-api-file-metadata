'use strict';

const path = require('path');
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

  describe('POST /api/filedata', () => {
    it('should return a JSON object with the file size, name and MIME type', (done) => {
      request(app)
        .post('/api/filedata')
        .attach('upfile', path.join(__dirname, './file-to-upload.txt'))
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.body).toEqual(
            expect.objectContaining({
              name: 'file-to-upload.txt',
              size: 38,
              type: 'text/plain',
            })
          );
          done();
        });
    });

    it('should return an error if no file is uploaded', (done) => {
      request(app)
        .post('/api/filedata')
        .expect('Content-Type', /json/)
        .expect(400)
        .then((res) => {
          expect(res.body.error).toBeTruthy();
          expect(res.body.message).toBeDefined();
          done();
        });
    });

    it('should return an error if field name is not upfile', (done) => {
      request(app)
        .post('/api/filedata')
        .attach('wrongFieldName', path.join(__dirname, './file-to-upload.txt'))
        .expect('Content-Type', /json/)
        .expect(400)
        .then((res) => {
          expect(res.body.error).toBeTruthy();
          expect(res.body.message).toBeDefined();
          done();
        });
    });
  });
});
