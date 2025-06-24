const winston = require('winston');
const Sentry = require('@sentry/node');
require('dotenv').config();

Sentry.init({ dsn: process.env.SENTRY_DSN });

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

logger.captureException = (error) => {
  logger.error(error.message);
  Sentry.captureException(error);
};

module.exports = logger;
