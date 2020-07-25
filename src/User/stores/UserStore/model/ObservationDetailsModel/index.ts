import { observable, action } from 'mobx'

class ObservationDetails {
   observationId
   @observable title
   @observable reportedOn
   @observable severity
   @observable status
   @observable dueDate
   @observable description
   @observable category
   @observable subCategory
   @observable assignedStatus
   @observable assignedTo
   @observable remainingRps
   @observable attachments

   constructor(object, service) {
      this.observationId = object.observation_id
      this.title = object.title
      this.reportedOn = object.reported_on
      this.severity = object.severity
      this.status = object.status
      this.dueDate = object.due_date
      this.description = object.description
      this.category = object.category
      this.subCategory = object.subcategory
      this.assignedTo = object.assigned_to
      this.remainingRps = object.remaining_rps
      this.attachments = object.attachments
   }
}
