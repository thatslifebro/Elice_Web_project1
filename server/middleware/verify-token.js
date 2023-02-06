import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants/env';

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split('Bearer ')?.[1];
    if (!token) {
      const err = new Error('token이 헤더에 없습니다');
      err.name = 'NoToken';
      throw err;
    }
    req.decoded = jwt.verify(token, JWT_SECRET);
    return next();
  } catch (err) {
    if (err.name === 'TokenExpireError') {
      return res.status(419).json({
        code: 419,
        name: 'ExpiredToken',
        message: '토큰이 만료되었습니다.',
        role: 'NotUser',
      });
    }
    if (err.name === 'NoToken') {
      return res.status(402).json({
        code: 402,
        name: err.name,
        message: err.message,
        role: 'NotUser',
      });
    }
    return res.status(401).json({
      code: 401,
      name: 'InvalidToken',
      message: '유효하지 않은 토큰입니다.',
      role: 'NotUser',
    });
  }
};

export default verifyToken;
