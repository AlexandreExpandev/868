/**
 * @summary
 * Application logging utility
 */

import winston from 'winston';
import { config } from '../config';

// Define log format
const logFormat = winston.format.combine(winston.format.timestamp(), winston.format.json());

// Create logger instance
export const logger = winston.createLogger({
  level: config.logging.level,
  format: logFormat,
  defaultMeta: { service: 'calculadora-api' },
  transports: [
    // Console transport for all environments
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
    }),
    // File transport for production
    ...(process.env.NODE_ENV === 'production'
      ? [
          new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
          new winston.transports.File({ filename: 'logs/combined.log' }),
        ]
      : []),
  ],
});
