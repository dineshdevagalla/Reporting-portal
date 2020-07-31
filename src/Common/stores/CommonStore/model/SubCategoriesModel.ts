import { observable } from 'mobx'
import { runInThisContext } from 'vm'

class SubCategories {
   subCategoryId
   @observable subCategoryName
   constructor(object) {
      this.subCategoryId = object.id
      this.subCategoryName = object.name
   }
}

export default SubCategories
