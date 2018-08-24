'use strict';

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  if (
    err.code === 'LIMIT_UNEXPECTED_FILE'
    && err.message === 'Unexpected field'
  ) {
    return res.status(400).json({
      error: true,
      status: 400,
      message: `${err.message}, "${err.field}" is not a valid field name`,
    });
  }

  return res.status(err.status || 500).json({
    error: true,
    status: err.status || 500,
    message: err.message || 'Internal Server Error',
  });
}

module.exports = errorHandler;
