const { Product } = require('../db/model');

export class ProductsService {
  static async getAllProduct(title) {
    const products = await Product.find();
    if (!title) {
      return products;
    } else {
      const category = await Category.find({ title });
      const products = await Product.find({ categoryId: category.id });
      if (!products) {
        throw new Error('존재하지 않는 제품입니다');
      }
      return products;
    }
  }

  static async getProductById(id) {
    const product = await Product.findById(id);
    if (!product) {
      throw new Error('존재하지 않는 제품입니다');
    }
    return product;
  }

  static async addProduct({
    title,
    categoryId,
    shortDescription,
    detailDescription,
    imageKey,
    inventory,
    price,
  }) {
    if (
      !title ||
      !categoryId ||
      !shortDescription ||
      !detailDescription ||
      !imageKey ||
      !inventory ||
      !price
    ) {
      throw new Error('필수 항목이 모두 채워지지 않았습니다.');
    }
    const createNewProduct = await Product.create({
      title,
      categoryId,
      shortDescription,
      detailDescription,
      imageKey,
      inventory,
      price,
    });
    return createNewProduct;
  }

  static async updateProductById(id) {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!Products) {
      throw new Error('존재하지 않는 제품 입니다');
    }
    return updatedProduct;
  }

  static async deleteProductById(id) {
    await Product.findByIdAndDelete(id);
    return;
  }
}

export default ProductsService;
