'use strict';

const cors = require('cors');
const express = require('express');
const multer = require('multer');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

const FIELD_NAME = 'upfile';

router.post('/filedata', cors(), upload.single(FIELD_NAME), (req, res) => {
  if (!req.file) {
    return res.json({
      error: true,
      message: 'No file provided',
    });
  }

  return res.json({
    name: req.file.originalname,
    size: req.file.size,
    type: req.file.mimetype,
  });
});

module.exports = router;
