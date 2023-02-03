import { Router } from 'express';
import asyncHandler from '../util/async-handler';
import { authService } from '../services/auth';

import verifyToken from '../db/middleware/verify-token';

const router = Router();

router.post(
  '/login',
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json(token);
    return;
  }),
);

router.post(
  '/register',
  asyncHandler(async (req, res) => {
    const { email, password, address, fullName, role } = req.body;
    const newuser = await authService.register(
      email,
      password,
      address,
      fullName,
      role,
    );
    res.json(newuser);
    return;
  }),
);

router.delete(
  '/withdrawal',
  verifyToken,
  asyncHandler(async (req, res) => {
    const { userId, role } = req.decoded;
    await authService.withdrawal(userId, role, req.body.password);
    res.json('성공');
    return;
  }),
);

export default router;
