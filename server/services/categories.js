const { Category } = require('../db/model');
const { Product } = require('../db/model');

export default class CategoriesService {
  //전체카테고리목록
  static async getAllCategories() {
    return await Category.find({});
  }

  //id로 카테고리 가져오기
  static async getCategoryById(id) {
    const readCategory = await Category.findById(id);
    if (!readCategory) {
      throw new Error('해당 카테고리는 없습니다.');
    }
    return readCategory;
  }

  //새로운 카테고리 등록
  static async addCategory({ title }) {
    // 추가 작업 : 이미 등록된 카테고리 여부 체크
    const createCategory = await Category.create({ title });
    return createCategory;
  }

  //id로 카테고리 수정하기
  static async updateCategoryById(id, title) {
    const updateCategory = await Category.findByIdAndUpdate(
      id,
      { title },
      {
        new: true,
      },
    );
    if (updateCategory) {
      throw new Error('해당 카테고리는 없습니다.');
    }
    return updateCategory;
  }

  //id로 카테고리 삭제하기
  static async deleteCategoryById(id) {
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
      throw new Error('해당 카테고리는 없습니다.');
    }
    return deletedCategory;
  }

  //id로 상품 가져오기
  static async getAllProduct({ id }) {
    const products = await Product.find({ categoryId: id });
    if (!products) {
      throw new Error('카테고리에 해당하는 제품가 없습니다.');
    }
    return products;
  }
}
