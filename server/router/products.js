import { Router } from 'express';
import { Product, Category } from '../db/model';
import asyncHandler from '../util/async-handler';
import ProductsService from '../services/products';
const router = Router();
// ---- 모든 유저(관리자 및 회원) ----

//모든 물품 목록 가져오기)
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const { category } = req.query;
    const products = await ProductsService.getAllProduct(category);
    res.json(products);
    return;
  }),
);

//물품 상세정보 가져오기
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await ProductsService.getProductById(id);
    res.json(product);
    return;
  }),
);

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
    const createdProduct = await ProductsService.addProduct({
      title,
      categoryId,
      shortDescription,
      detailDescription,
      imageKey,
      inventory,
      price,
    });
    res.status(200).json(createdProduct);
    return;
  }),
);

//id로 물품 정보 수정하기
router.put(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const {
      title,
      categoryId,
      shortDescription,
      detailDescription,
      imageKey,
      inventory,
      price,
    } = req.body;
    const updatedProduct = await ProductsService.updateProductById({
      id,
      title,
      categoryId,
      shortDescription,
      detailDescription,
      imageKey,
      inventory,
      price,
    });
    res.json(updatedProduct);
    return;
  }),
);

//id로 물품 정보 삭제하기
router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deletedProuct = await ProductsService.deleteProductById(id);
    res.json(deletedProuct);
    return;
  }),
);

export default router;
