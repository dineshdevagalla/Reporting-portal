import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import { runInThisContext } from 'vm'

class UserObservationModel {
   observationId
   @observable title
   @observable reportedOn
   @observable assignedStatus
   @observable assignedTo
   @observable severity
   @observable status
   @observable dueDate
   @observable messagesCount
   @observable showDueDate
   @observable getObservationDetaiAPIStatus
   @observable getObservationDetaiAPIError

   constructor(object, UserService?: any) {
      this.observationId = object.observation_id
      this.title = object.title
      this.reportedOn = object.reported_on
      this.assignedStatus = object.assigned_status
      this.assignedTo = object.assigned_to
      this.severity = object.severity
      this.status = object.status
      this.dueDate = object.due_date
      this.messagesCount = object.message_count
      this.showDueDate = object.show_due_date
   }

   @action.bound
   setObservationDetailsAPIStatus(status) {
      this.getObservationDetaiAPIStatus = status
   }

   @action.bound
   setObservationDetaAPIError(error) {
      this.getObservationDetaiAPIError = error
   }

   @action.bound
   setObservationDetailsResponse() {}

   //   @action.bound
   //   getObservationDeta() {
   //     return bindPromiseWithOnSuccess()
   //       .to(this.setObservationDetailsAPIStatus, this.setObservationDetailsResponse)
   //       .catch(this.setObservationDetaAPIError)
   //   }
}

export default UserObservationModel