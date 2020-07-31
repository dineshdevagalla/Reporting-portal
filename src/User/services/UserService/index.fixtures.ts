import userObservationsResponse from '../../fixtures/UsersObservations.json'
import eachObservationDetails from '../../fixtures/EachObservatio.json'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import { RequestObjectOfFilterAndSortingType } from '../../../Common/stores/types'
import UserService from '.'
import {
   UserObservationsResponseType,
   UserObservationFillingType,
   ReportedObservationType
} from '../../stores/types'

class UsersFixturesService implements UserService {
   getObservationsAPI(limit, offset, RequestObjectOfFilterAndSortingType) {
      console.log(resolveWithTimeout(userObservationsResponse), 'fixtures')
      return resolveWithTimeout(userObservationsResponse)

      console.log(resolveWithTimeout(userObservationsResponse), 'response')
   }

   getEachObservationDetails(observationId: number) {
      return resolveWithTimeout(eachObservationDetails)
   }

   PostNewObservationAPI(requestObject: UserObservationFillingType) {
      return resolveWithTimeout({})
   }
}

export default UsersFixturesService
