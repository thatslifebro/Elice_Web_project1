import { Router } from 'express';
import { Product, Category } from '../db/model';
import { asyncHandler } from '../util/async-handler';

const router = Router();
// ---- 모든 유저(관리자 및 회원) ----

//모든 물품 목록 가져오기)
router.get(
  '/ ',
  asyncHandler(async (req, res) => {
    const title = req.query.category;
    const products = await Product.find();
    if (!title) {
      res.json(products);
    } else {
      const category = await Category.find({ title });
      const products = await Product.find({ categoryId: category.id });
      if (!products) {
        throw new Error('존재하지 않는 제품입니다');
      }
      res.json(products);
    }
    return;
  }),
);

//물품 상세정보 가져오기
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
// ----- 관리자  ------

//새로운 물품 등록하기
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
    const newProduct = await productService.addProduct({
      title,
      categoryId,
      shortDescription,
      detailDescription,
      imageKey,
      inventory,
      price,
    });
    res.status(200).json(newProduct);
    return;
  }),
);

//id로 물품 정보 수정하기
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

//id로 물품 정보 삭제하기
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

export default router;
