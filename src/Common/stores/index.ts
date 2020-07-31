import UsersFixturesService from '../../User/services/UserService/index.fixtures'

import UserStore from '../../User/stores/UserStore/'
import CommonStore from './CommonStore'
import CommonFixtureService from '../services/index.fixtures'
const userFixturesService = new UsersFixturesService()
const userStore = new UserStore(userFixturesService)
const commonStore = new CommonStore(new CommonFixtureService())
export default { userStore, commonStore }
