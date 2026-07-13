import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET || 'greatvilla-secret-key-123456',
  expiresIn: process.env.JWT_EXPIRATION || '7d',
}));
