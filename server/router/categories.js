import { Router } from 'express';
import { Category, Product } from '../db/model';
import { asyncHandler } from '../util/async-handler';
const router = Router();

//관리자모드 - get, get, post, push, delete

//전체카테고리목록

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const Categorys = await Category.find({});
    res.json(Categorys);
    return;
  }),
);

//id로 카테고리 가져오기
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      throw new Error('없는 카테고리 입니다');
    }
    res.json(category);
    return;
  }),
);

//새로운 카테고리 등록하기
router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { title } = req.body;
    const newCategory = await categoriesService.addCategory(title);
    res.status(200).json(newCategory);
    //return;
  }),
);

/* old
//새로운 카테고리 등록하기
router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { title } = req.body;
    if (!title) {
      throw new Error('등록할 카테고리를 입력하세요.');
    }
    const newCategory = await Category.create({
      title,
    });
    res.json(newCategory);
    return;
  }),
);
*/

//id로 카테고리 수정하기
router.put(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const category = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    //console.log(category);
    if (!category) {
      throw new Error('없는 카테고리 입니다');
    }
    res.json(category);
    return;
  }),
);

//id로 카테고리 삭제하기
router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      throw new Error('없는 카테고리 입니다');
    }
    //res.json(category);
    res.send('OK');
    return;
  }),
);
export default router;
