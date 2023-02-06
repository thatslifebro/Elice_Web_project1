const { Order } = require('../db/model');

export default class orderService {
  //주문 수정
  static async updateOrderById({ id, userId, items, address, status, role }) {
    if (role === 'ADMIN' || id === userId) {
      const updateOrder = await Order.findByIdAndUpdate(
        id,
        {
          items,
          address,
          status,
        },
        { new: true },
      );
      return updateOrder;
    } else {
      throw new Error('권한이 없습니다 나가세요');
    }
  }
  //주문삭제
  static async deleteOrderById({ id, role, userId }) {
    if (role === 'ADMIN' || id === userId) {
      const deleteOrder = await Order.findByIdAndDelete(id);
      return deleteOrder;
    } else {
      throw new Error('오류 or 로그인페이지로 보내기');
    }
  }

  //주문등록
  static async addOrderById({ userId, items, address, status }) {
    const addOrder = await Order.create({ userId, items, address, status });
    return addOrder;
  }
}
