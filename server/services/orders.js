const { Order } = require('../db/model');

export default class OrdersService {
  //전체주문목록
  static async getOrdersList({ userId, role, id }) {
    if (!id && role === 'ADMIN') {
      return await Order.find({});
    } else if (role === 'ADMIN' || userId === id) {
      const readOrders = await Order.find({ userId });
      if (!readOrders) {
        throw new Error('주문이력이 없습니다.');
      }
      return readOrders;
    }
  }

  //orderId로 특정주문이력조회
  static async getOrderByOrderId({ id }) {
    const readOrder = await Order.findById({ id });
    if (!readOrder) {
      throw new Error('주문이력이 없습니다.');
    }
    return readOrder;
  }
}
