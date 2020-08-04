import React, { lazy } from 'react'
import { Route } from 'react-router-dom'
import ProtectedRoute from '../../Common/components/ProtectedRoute'
import {
   USER_OBSERVATIONS_LIST,
   USER_CREATE_OBSERVATION
} from '../constants/NavigationConstants/navigationConstants'
import UserObservationsRoute from './UsersObservationsRoute'
import UserCreateObservationRoute from './UserCreateObservationRoute'
// const UserObservationsRoute = lazy(() => import('./UsersObservationsRoute'))
// const UserCreateObservationRoute = lazy(() =>
//    import('./UserCreateObservationRoute')
// )

export const UserRoutes = [
   <ProtectedRoute
      key='usersObservations'
      exact
      path={USER_OBSERVATIONS_LIST}
      component={UserObservationsRoute}
   ></ProtectedRoute>,
   <ProtectedRoute
      key='createObseravationRoute'
      exact
      path={USER_CREATE_OBSERVATION}
      component={UserCreateObservationRoute}
   ></ProtectedRoute>
]
