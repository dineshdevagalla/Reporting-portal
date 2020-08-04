import { observable } from 'mobx'
import SubCategories from '../model/SubCategoriesModel'
class CategoriesModel {
   categoryId
   @observable categoryName
   @observable subCategories
   constructor(object) {
      this.categoryName = object.name
      this.categoryId = object.id
      this.subCategories = object.subcategories.map(
         eachSubCategories => new SubCategories(eachSubCategories)
      )
   }
}
export default CategoriesModel
