import { Router } from 'express';
import { asyncHandler } from '../util/async-handler';
import { categoriesService } from '../services/categories';

const router = Router();

//관리자모드 - get, get, post, push, delete

//전체카테고리목록
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const categories = await categoriesService.getCategories();
    res.status(200).json(categories);
  }),
);

//id로 카테고리 가져오기
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const category = await categoriesService.getCategory(id);
    res.status(200).json(category);
  }),
);

//새로운 카테고리 등록하기
router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { title } = req.body;
    const newCategory = await categoriesService.addCategory({
      title,
    });
    res.status(200).json(newCategory);
  }),
);

//id로 카테고리 수정하기
router.put(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const category = await categoriesService.putCategory(id, req.body);
    res.status(200).json(category);
  }),
);

//id로 카테고리 삭제하기
router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const category = await categoriesService.deleteCategory(id);
    res.status(200).json(category);
  }),
);

export default router;
