import { createClient } from 'redis';
import logger from './logger';

let redisClient = createClient({
  url: 'redis://localhost:6379'
});

redisClient.on('error', (err) => {
  logger.error('Redis Error', err);
});

redisClient.on('error', (err) => {
  logger.info('Redis Conected');
});

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
