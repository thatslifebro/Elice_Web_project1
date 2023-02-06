import { Router } from 'express';
import asyncHandler from '../util/async-handler';
import OrdersService from '../services/orders';

import verifyToken from '../middleware/verify-token';

const router = Router();

//전체주문목록
router.get(
  '/',
  verifyToken,
  asyncHandler(async (req, res) => {
    const { userId, role } = req.decoded;
    const { id } = req.query.userId;
    const orders = await OrdersService.getOrdersList({ userId, role, id });
    return res.status(200).json(orders);
  }),
);

//orderId로 특정주문이력조회
router.get(
  '/:id',
  verifyToken,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const orders = await OrdersService.getOrderByOrderId({ id });
    return res.status(200).json(orders);
  }),
);

export default router;
