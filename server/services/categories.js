const { Category } = require('../db/model');

export class categoriesService {
  static async addCategory(title) {
    const createNewCategories = await Category.create({ title });
    console.log('db에 카테고리가 정상적으로 등록되었습니다.');
    return createNewCategories;
  }
}
