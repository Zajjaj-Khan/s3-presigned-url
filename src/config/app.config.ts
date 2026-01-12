import * as process from 'node:process';
import { registerAs } from '@nestjs/config';

const config = () => ({
  AWS_REGION: process.env.AWS_REGION,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET_NAME:process.env.AWS_BUCKET_NAME
});

export default registerAs('configService', config);