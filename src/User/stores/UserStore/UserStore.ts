import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import UserObservationModel from './model/UserObservationModel'
import PaginationStore from '../../../Common/stores/PaginationStore'
class UserStore {
   @observable userPaginationStore

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
   init() {}
   @action.bound
   clearStore() {
      this.filterType = 'all'
      this.sortField = 'reportedOn'
      this.sortField = 'asc'
   }

   @action.bound
   onClickEachObservation(selectedObservationId) {
      const selectedObservation = this.userPaginationStore.observations.find(
         eachObservation =>
            eachObservation.observationId === selectedObservationId
      )

      selectedObservation.getObservationData(selectedObservationId)
   }
}

export default UserStore
