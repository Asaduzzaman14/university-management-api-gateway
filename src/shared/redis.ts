import { createClient } from 'redis';
import logger from './logger';

let redisClient = createClient({
  url: 'https://localhost:6379'
});

redisClient.on('error', (err) => {
  logger.error('Redis Error', err);
});
