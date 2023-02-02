const { Schema } = require('mongoose');

const OrderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    productItem: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    Order: {
      type: new Schema({
        //상품 아이디
        productId: {
          type: [String],
          required: true,
        },
        //수량
        quantity: {
          type: [Number],
          required: true,
        },
        //총 가격
        totalPrice: {
          type: Number,
          required: true,
        },
      }),
    },
    address: {
      type: new Schema(
        {
          postalCode: String,
          address1: String,
          address2: String,
          receiverName: String,
          receiverPhoneNumber: String,
        },
        {
          _id: false,
        },
      ),
      required: true,
    },
    //배송상태 ??
    status: {
      type: String,
      required: false,
      default: '상품 준비중',
    },
  },
  {
    collection: 'orders',
    timestamps: true,
  },
);

module.exports = OrderSchema;
