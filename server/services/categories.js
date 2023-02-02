//const uuid = require('uuid');
const { Category } = require('../db/model');

class categoriesService {
  static async addCategory(title) {
    //const id = uuid.v4();

    //const newCategories = { id, title };
    // const newCategories = { title };

    // > db에 저장하기
    const createNewCategories = await Category.create({ title });
    console.log('db에 카테고리가 정상적으로 등록되었습니다.');

    return createNewCategories;
  }
}

module.exports = { categoriesService };
