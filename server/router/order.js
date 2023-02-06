import { Router } from 'express';
import asyncHandler from '../util/async-handler';
import orderService from '../services/order';
import verifyToken from '../middleware/verify-token';
const router = Router();

// 특정 주문 수정하기(관리자 및 회원)
router.put(
  '/:id',
  verifyToken,
  asyncHandler(async (req, res) => {
    const { userId, role } = req.decoded;
    const { id } = req.params;
    const { items, address, status } = req.body;
    const updatedOrder = await orderService.updateOrderById({
      id,
      userId,
      items,
      address,
      status,
      role,
    });
    return res.status(201).json(updatedOrder);
  }),
);

//특정 주문 삭제(관리자 및 회원)
router.delete(
  '/:id',
  verifyToken,
  asyncHandler(async (req, res) => {
    const { userId, role } = req.decoded;
    const { id } = req.params;
    const deleteOrder = await orderService.deleteOrderById({
      id,
      userId,
      role,
    });
    return res.status(200).json(deleteOrder);
  }),
);

//개인 주문 생성
router.post(
  '/',
  verifyToken,
  asyncHandler(async (req, res) => {
    const { userId, role } = req.decoded;
    const { items, address, status } = req.body;
    const createdOrder = await orderService.addOrderById({
      userId,
      items,
      address,
      status,
    });
    return res.status(201).json(createdOrder);
  }),
);

export default router;
