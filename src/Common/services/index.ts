import { CategoriesResponseType } from '../stores/types'

export interface CommonService {
   getCategoriesAPI: () => Promise<CategoriesResponseType>
}
