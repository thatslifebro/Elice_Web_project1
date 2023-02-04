const { Category } = require('../db/model');

export default class CategoriesService {
  //전체카테고리목록
  static async getAllCategories() {
    const readCategories = await Category.find({});
    return readCategories;
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
  static async updateCategoryById(id, categoryInfo) {
    const updateCategory = await Category.findByIdAndUpdate(id, categoryInfo, {
      new: true,
    });
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
}
