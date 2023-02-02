import { Router } from 'express';
import { User } from '../db/model';
import { asyncHandler } from '../util/async-handler';
import bcrypt from 'bcrypt';
const saltRounds = 10;
const router = Router();

router.post(
  '/login',
  asyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match || !user) {
      throw new Error('이메일이나 비번이 틀림');
    }
    //jwt tokken 생성
    //res.json(jwt tokken)
    res.json('로그인 성공');
    return;
  }),
);

router.post(
  '/register',
  asyncHandler(async (req, res) => {
    const { email, address, fullName } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw new Error('이미 있는 이메일');
    }
    await User.create({
      email,
      address,
      fullName,
      password: await bcrypt.hash(req.body.password, saltRounds),
    });
    res.json('성공');
    return;
  }),
);
export default router;
