import UsersFixturesService from '../../User/services/UserService/index.fixtures'

import UserStore from '../../User/stores/UserStore/'

const userFixturesService = new UsersFixturesService()
const userStore = new UserStore(userFixturesService)

export default { userStore, UserStore }
