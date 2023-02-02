const { Router } = require('express');
const { Product } = require('../db/model');
const asyncHandler = require('../util/async-Handler');
const router = Router();

// ---- 모든 유저(관리자 및 회원) ----

//모든 제품정보 가져오기
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const Products = await Product.find();
    res.json(Products);
    return;
  }),
);

//id로 제품정보 가져오기
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new Error('존재하지 않는 제품입니다');
    }
    res.json(product);
    return;
  }),
);

// 카테고리별 물품 목록 가져오기
router.get(
  '/category/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.find({ categoryId: id });
    if (!product) {
      throw new Error('존재하지 않는 제품입니다');
    }
    res.json(product);
    return;
  }),
);

// ----- 관리자  ------

//새로운 제품 등록하기
router.post(
  '/',
  asyncHandler(async (req, res) => {
    const {
      title,
      categoryId,
      shortDescription,
      detailDescription,
      imageKey,
      inventory,
      price,
    } = req.body;
    if (
      !title ||
      !categoryId ||
      !shortDescription ||
      !detailDescription ||
      !imageKey ||
      !inventory ||
      !price
    ) {
      throw new Error('필수 항목이 모두 채워지지 않았습니다.');
    }
    const newProduct = await Product.create({
      title,
      categoryId,
      shortDescription,
      detailDescription,
      imageKey,
      inventory,
      price,
    });
    return;
  }),
);

//id로 제품 정보 수정하기
router.put(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const Products = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(Products);
    if (!Products) {
      throw new Error('존재하지 않는 제품 입니다');
    }
    return;
  }),
);

//id로 제품 정보 삭제하기
router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      throw new Error('이미 존재하지 않은 상품입니다');
    }
    return;
  }),
);

module.exports = router;
