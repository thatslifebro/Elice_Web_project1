const { Category } = require('../db/model');

export class categoriesService {
  //전체카테고리목록
  static async getCategories() {
    const readCategories = await Category.find({});
    return readCategories;
  }

  //id로 카테고리 가져오기
  static async getCategory(id) {
    const readCategory = await Category.findById(id);
    // if (!readCategory) {
    //   throw new Error('해당 카테고리는 없습니다.');
    // }
    return readCategory;
  }

  //새로운 카테고리 등록
  static async addCategory(categoryInfo) {
    // 추가 작업 : 이미 등록된 카테고리 여부 체크

    const createNewCategories = await Category.create(categoryInfo);
    console.log('db에 카테고리가 정상적으로 등록되었습니다.');
    return createNewCategories;
  }

  //id로 카테고리 수정하기
  static async putCategory(id, categoryInfo) {
    const updateCategory = await Category.findByIdAndUpdate(id, categoryInfo, {
      new: true,
    });
    // if (!readCategory) {
    //   throw new Error('해당 카테고리는 없습니다.');
    // }
    return updateCategory;
  }

  //id로 카테고리 삭제하기
  static async deleteCategory(id) {
    const updateCategory = await Category.findByIdAndDelete(id);
    // if (!readCategory) {
    //   throw new Error('해당 카테고리는 없습니다.');
    // }
    return updateCategory;
  }
}
