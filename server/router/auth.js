import { Router } from 'express';
import asyncHandler from '../util/async-handler';
import authService from '../services/auth';

import verifyToken from '../middleware/verify-token';

const router = Router();

//로그인
router.post(
  '/login',
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    return res.status(200).json(token);
  }),
);

//회원가입
router.post(
  '/register',
  asyncHandler(async (req, res) => {
    const { email, password, address, fullName, role } = req.body;
    const createdUser = await authService.register(
      email,
      password,
      address,
      fullName,
      role,
    );
    return res.status(201).json(createdUser);
  }),
);

//회원탈퇴
router.delete(
  '/withdrawal',
  verifyToken,
  asyncHandler(async (req, res) => {
    const { userId, role } = req.decoded;
    const deletedUser = await authService.withdrawal(
      userId,
      role,
      req.body.password,
    );
    return res.status(200).json(deletedUser);
  }),
);

export default router;
