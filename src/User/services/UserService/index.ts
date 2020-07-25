import {
   ReportedObservationType,
   UserObservationsResponseType,
   UserObservationFillingType
} from '../../stores/types'

import { RequestObjectOfFilterAndSortingType } from '../../../Common/stores/types'

interface UserService {
   getObservationsAPI: (
      limit?: any,
      offset?: any,
      filterAndSortingObject?: any
   ) => Promise<UserObservationsResponseType>

   getEachObservationDetails: (
      observationId: number
   ) => Promise<ReportedObservationType>

   PostNewObservationAPI: (
      requestObject: UserObservationFillingType
   ) => Promise<{}>
}

export default UserService
