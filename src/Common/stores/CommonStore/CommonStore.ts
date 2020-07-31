import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import CategoriesModel from './model/CategoriesModel'
class CommonStore {
   @observable getsetGategoriesAPIStatus
   @observable getsetGategoriesAPIError
   @observable categoriesList
   commonService
   constructor(commonService) {
      this.commonService = commonService
      this.init()
   }
   @action.bound
   init() {
      this.getsetGategoriesAPIStatus = API_INITIAL
      this.getsetGategoriesAPIError = null
      this.categoriesList = []
   }

   @action.bound
   set setGategoriesAPIStatus(status) {
      this.getsetGategoriesAPIStatus = status
   }

   @action.bound
   setGategoriesAPIError(error) {
      this.getsetGategoriesAPIError = error
   }

   @action.bound
   setGategoriesResponse(response) {
      this.categoriesList = response.map(
         eachCategory => new CategoriesModel(eachCategory)
      )
   }

   @action.bound
   getsetGategories() {
      const getCategoriesPromise = this.commonService.getCategoriesAPI()
      return bindPromiseWithOnSuccess(getCategoriesPromise)
         .to(this.setGategoriesAPIStatus, this.setGategoriesResponse)
         .catch(this.setGategoriesAPIError)
   }
}

export default CommonStore
