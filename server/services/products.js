const { Product } = require('../db/model');

export class ProductsService {
  //   static async getAllProducts() {
  //     const getProduct = await Product.find();
  //     console.log('db에 상품을 정상적으로 가져왔습니다.');
  //     return getProduct;
  //   }
  //   static async getCategoryProducts() {
  //     const getProduct = await Product.find({ categoryId: id });
  //     console.log('db에 상품을 정상적으로 가져왔습니다.');
  //     return getProduct;
  //   }
  static async addProduct({}) {
    const createNewProduct = await Product.create({});
    console.log('db에 상품이 정상적으로 등록되었습니다.');
    return createNewProduct;
  }
  static async setProduct(title) {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log('db에 상품이 정상적으로 수정되었습니다.');
    return createNewProduct;
  }
  static async deleteProductData(title) {
    const createNewProduct = await Product.findByIdAndDelete({ title });
    console.log('db에 상품이 정상적으로 삭제되었습니다.');
    return createNewProduct;
  }
}
