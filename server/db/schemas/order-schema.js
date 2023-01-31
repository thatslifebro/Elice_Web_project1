const OrderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    productId: {
      type: [Number],
      required: true,
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

export { OrderSchema };
