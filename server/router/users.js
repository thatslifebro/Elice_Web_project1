import { Router } from 'express';
import { User } from '../db/model';
import { asyncHandler } from '../util/async-handler';

const router = Router();

//모든 사용자정보 가져오기
//관리자
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const users = await User.find().select('email address fullName role');
    res.json(users);
    return;
  }),
);

//id로 사용자 정보가져오기
//관리자
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id).select('email address fullName role');
    if (!user) {
      throw new Error('없는 사용자 입니다');
    }
    res.json(user);
    return;
  }),
);

//id로 사용자 정보 수정하기
//관리자
router.put(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      throw new Error('없는 사용자 입니다');
    }
    return;
  }),
);

//id로 사용자 정보 삭제하기
//관리자
router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new Error('없는 사용자 입니다');
    }
    return;
  }),
);

//새로운 사용자 등록하기
//아무나
// router.post(
//   '/',
//   asyncHandler(async (req, res) => {
//     const { email, fullName, password, phoneNumber, address } = req.body;
//     if (!email || !fullName || !password || !phoneNumber || !address) {
//       throw new Error('필수 항목이 모두 채워지지 않았습니다.');
//     }
//     const newUser = await User.create({
//       email,
//       fullName,
//       password,
//       phoneNumber,
//       address,
//     });
//     return;
//   }),
// );

//user

//자신정보 가져오기
//회원

// router.get(
//   '/', //유효성검사
//   asyncHandler(async (req, res) => {
//     const { id } = // jwt 토큰에서 받은 id
//     const user = await User.findById(id).select('email address fullName');
//     res.json(user);
//     return;
//   }),
// );

//자신정보 수정
//회원

// router.put(
//   '/', //유효성검사
//   asyncHandler(async (req, res) => {
//     const { id } = // jwt 토큰에서 받은 id
//     const user = await User.findByIdAndUpdate(id,req.body);
//     return;
//   }),
// );

//회원 비밀번호 수정
//회원

// router.put(
//   '/', //유효성검사
//   asyncHandler(async (req, res) => {
//     const { id } = // jwt 토큰에서 받은 id
//     const user = await User.findById(id);
//     if (!user) {
//       throw new Error('없는 유저');
//     }
//     const match = await bcrypt.compare(req.body.password, user.password);
//     if (!match) {
//       throw new Error('비밀번호 틀림');
//     } else {
//       await user.update({ password: await hash(req.body.newPassword) });
//       return;
//     }
//   }),
// );

//회원 탈퇴
//회원

export default router;
