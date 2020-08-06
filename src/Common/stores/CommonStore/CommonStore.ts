import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import CategoriesModel from './model/CategoriesModel'
class CommonStore {
   @observable getCategoriesAPIStatus
   @observable getCategoriesAPIError
   @observable getPostUserObservationAPIStatus
   @observable getPostUserObservationAPIError
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
      this.getPostUserObservationAPIStatus = API_INITIAL
      this.getPostUserObservationAPIError = null
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
      this.categoriesList = response.categories.map(
         eachCategory => new CategoriesModel(eachCategory)
      )
   }

   @action.bound
   getCategories() {
      const getCategoriesPromise = this.commonService.getCategoriesAPI()

      return bindPromiseWithOnSuccess(getCategoriesPromise)
         .to(this.setCategoriesAPIStatus, this.setCategoriesResponse)
         .catch(this.setCategoriesAPIError)
   }

   @action.bound
   setPostUserObservationAPIStatus(status) {
      this.getPostUserObservationAPIStatus = status
   }
   @action.bound
   setPostUserObservationAPIError(error) {
      this.getPostUserObservationAPIError = error
   }
   @action.bound
   postObservation(requestObject) {
      const getPostObservationPromise = this.commonService.PostNewObservationAPI(
         requestObject
      )
      return bindPromiseWithOnSuccess(getPostObservationPromise)
         .to(this.setPostUserObservationAPIStatus, () => {})
         .catch(this.setPostUserObservationAPIError)
   }
   @action.bound
   onClickSubmitObservation(requestObject) {
      this.postObservation(requestObject)
   }
}

export default CommonStore
