import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import CategoriesModel from './model/CategoriesModel'
class CommonStore {
   @observable getCategoriesAPIStatus
   @observable getCategoriesAPIError
   @observable categoriesList
   commonService
   constructor(commonService) {
      this.commonService = commonService
      this.init()
   }
   @action.bound
   init() {
      this.getCategoriesAPIStatus = API_INITIAL
      this.getCategoriesAPIError = null
      this.categoriesList = []
   }

   @action.bound
   setCategoriesAPIStatus(status) {
      this.getCategoriesAPIStatus = status
   }

   @action.bound
   setCategoriesAPIError(error) {
      this.getCategoriesAPIError = error
   }

   @action.bound
   setCategoriesResponse(response) {
      console.log(response, 'common store response')
      this.categoriesList = response.categories.map(
         eachCategory => new CategoriesModel(eachCategory)
      )

      console.log(this.categoriesList, 'store categories')
   }

   @action.bound
   getCategories() {
      const getCategoriesPromise = this.commonService.getCategoriesAPI()

      return bindPromiseWithOnSuccess(getCategoriesPromise)
         .to(this.setCategoriesAPIStatus, this.setCategoriesResponse)
         .catch(this.setCategoriesAPIError)
   }
}

export default CommonStore
