const { Router } = require('express');
const { User } = require('../db/model');
const asyncHandler = require('../util/async-Handler');

const router = Router();

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

// router.put(
//   '/', //유효성검사
//   asyncHandler(async (req, res) => {
//     const { id } = // jwt 토큰에서 받은 id
//     const user = await User.findByIdAndDelete(id);
//     return;
//   }),
// );

module.exports = router;
