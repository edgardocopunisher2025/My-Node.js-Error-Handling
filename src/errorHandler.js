const logger = require('../config/logger');

function errorHandler(err, req, res, next) {
  logger.captureException(err);
  res.status(500).json({
    message: 'Ocurrió un error en el servidor.',
    error: err.message,
  });
}

module.exports = errorHandler;
