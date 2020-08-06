import { CategoriesResponseType } from '../stores/types'
import { UserObservationFillingType } from '../../User/stores/types'

export interface CommonService {
   getCategoriesAPI: () => Promise<CategoriesResponseType>

   PostNewObservationAPI: (
      requestObject: UserObservationFillingType
   ) => Promise<{}>
}
