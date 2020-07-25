import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import UserObservationModel from './model/UserObservationModel'
import PaginationStore from '../../../Common/stores/PaginationStore'
class UserStore {
   @observable userPaginationStore
   @observable getPostUserObservationAPIStatus
   @observable getPostUserObservationAPIError
   @observable filterType
   @observable sortType
   @observable sortField
   @observable filterObjectBody
   userService
   constructor(userService) {
      this.userService = userService
      this.userPaginationStore = new PaginationStore(
         this.userService,
         UserObservationModel
      )
      this.init()
   }
   @action.bound
   init() {
      this.getPostUserObservationAPIStatus = API_INITIAL
      this.getPostUserObservationAPIError = null
   }
   @action.bound
   clearStore() {
      this.getPostUserObservationAPIStatus = API_INITIAL
      this.getPostUserObservationAPIError = null
      this.filterType = 'all'
      this.sortField = 'reportedOn'
      this.sortField = 'asc'
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
      const getPostObservationPromise = this.userService.PostNewObservationAPI(
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
   @action.bound
   onClickEachObservation() {}
}

export default UserStore
