import categories from '../fixtures/categoriesAndSubcategories.json'
import { CommonService } from '../services/'
import { resolveWithTimeout } from '../utils/TestUtils'
import { UserObservationFillingType } from '../../User/stores/types'

class CommonFixtureService implements CommonService {
   getCategoriesAPI() {
      return resolveWithTimeout(categories)
   }
   PostNewObservationAPI(requestObject: UserObservationFillingType) {
      return resolveWithTimeout({})
   }
}
export default CommonFixtureService
