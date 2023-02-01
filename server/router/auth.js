const { Router } = require('express');
const { User } = require('../db/model');
const asyncHandler = require('../util/async-Handler');

const router = Router();

//모든 사용자정보 가져오기
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const Users = await User.find();
    res.json(Users);
    return;
  }),
);

//id로 사용자 정보가져오기
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id);
    if (!user) {
      throw new Error('없는 사용자 입니다');
    }
    res.json(user);
    return;
  }),
);

//새로운 사용자 등록하기
router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { email, fullName, password, phoneNumber, address } = req.body;
    if (!email || !fullName || !password || !phoneNumber || !address) {
      throw new Error('필수 항목이 모두 채워지지 않았습니다.');
    }
    const newUser = await User.create({
      email,
      fullName,
      password,
      phoneNumber,
      address,
    });
    res.json(newUser);
    return;
  }),
);

//id로 사용자 정보 수정하기
router.put(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(user);
    if (!user) {
      throw new Error('없는 사용자 입니다');
    }
    res.json(user);
    return;
  }),
);

//id로 사용자 정보 삭제하기
router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new Error('없는 사용자 입니다');
    }
    res.json(user);
    return;
  }),
);

module.exports = router;
