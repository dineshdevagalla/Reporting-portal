import React from 'react'
import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import {
   API_INITIAL,
   API_FAILED,
   API_FETCHING,
   API_SUCCESS
} from '@ib/api-constants'

class PaginationStore {
   @observable getObservationListAPIStatus
   @observable getObservationListAPIError
   @observable ObservationsList
   @observable filterType
   @observable sortType
   @observable sortField
   @observable offSet
   @observable limit
   @observable filterObjectBody = {}
   entityModel: any
   requiredService: any

   constructor(service, model) {
      this.requiredService = service
      this.entityModel = model
      this.ObservationsList = new Map()
      this.offSet = 0
      this.limit = 10
      this.filterType = 'all'
      this.sortField = 'reportedOn'
      this.sortType = 'asc'
      this.getObservationListAPIStatus = API_INITIAL
      this.getObservationListAPIError = null
      this.settingFilterActionRequestObject()
   }

   @action.bound
   init() {
      this.ObservationsList.clear()
      this.getObservationListAPIStatus = API_INITIAL
      this.getObservationListAPIError = null
      this.offSet = 0
      this.getObservationsList()
      this.settingFilterActionRequestObject()
   }

   @action.bound
   settingFilterActionRequestObject() {
      this.filterObjectBody = {
         sort_field: this.sortField.toUpperCase(),
         sort_type: this.sortType.toUpperCase(),
         filter_type: this.filterType.toUpperCase()
      }
   }

   @action.bound
   getObservationsList() {
      const { offSet, limit, filterObjectBody } = this
      if (this.ObservationsList.has(offSet)) return
      else {
         const ObservationsListPromise = this.requiredService.getObservationsAPI(
            offSet,
            limit,
            filterObjectBody
         )

         return bindPromiseWithOnSuccess(ObservationsListPromise)
            .to(
               this.setProductListAPIStatus,
               this.setObservationsListAPIResponse
            )
            .catch(this.setObservationsListAPIError)
      }
   }

   @action.bound
   setProductListAPIStatus(APIStatus) {
      this.getObservationListAPIStatus = APIStatus
   }

   @action.bound
   setObservationsListAPIResponse(response) {
      const { offSet: key, entityModel } = this
      const { total_observations_count, observation_list } = response
      const observations = observation_list.map(
         eachObservation => new entityModel(eachObservation)
      )
      this.ObservationsList.set(key, observations)
   }

   @action.bound
   setObservationsListAPIError(error) {
      this.getObservationListAPIError = error
   }

   @computed
   get observations() {
      const { ObservationsList, offSet } = this
      return ObservationsList.get(offSet)
   }

   @action.bound
   onCurrentPageChanges(currentPage) {
      this.offSet = currentPage
      this.getObservationsList()
   }

   @action.bound
   onClickSelectFilter(filterType) {
      this.filterType = filterType
      this.init()
   }
   @action.bound
   onClickSortField(sortField, sortType) {
      this.sortField = sortField
      this.sortType = sortType
      this.init()
   }
}

export default PaginationStore
