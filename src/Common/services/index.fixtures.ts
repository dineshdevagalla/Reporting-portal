import categories from '../fixtures/categoriesAndSubcategories.json'
import { CommonService } from '../services/'
import { resolveWithTimeout } from '../utils/TestUtils'

class CommonFixtureService implements CommonService {
   getCategoriesAPI() {
      return resolveWithTimeout(categories)
   }
}
export default CommonFixtureService
