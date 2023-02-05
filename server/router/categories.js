import { Router } from 'express';
import asyncHandler from '../util/async-handler';
import CategoriesService from '../services/categories';

const router = Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const categories = await CategoriesService.getAllCategories();
    return res.status(200).json(categories);
  }),
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const category = await CategoriesService.getCategoryById(id);
    return res.status(200).json(category);
  }),
);

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { title } = req.body;
    const createdCategory = await CategoriesService.addCategory({
      title,
    });
    return res.status(201).json(createdCategory);
  }),
);

router.put(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const updatedCategory = await CategoriesService.updateCategoryById(
      id,
      title,
    );
    return res.status(201).json(updatedCategory);
  }),
);

router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deletedCategory = await CategoriesService.deleteCategoryById(id);
    return res.status(200).json(deletedCategory);
  }),
);

export default router;
