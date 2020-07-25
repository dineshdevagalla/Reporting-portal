import React, { lazy } from 'react'
import { ProtectedRoute } from '../../Common/components/ProtectedRoute'
import { USER_OBSERVATIONS_LIST } from '../constants/NavigationConstants/navigationConstants'
import UserObservationsRoute from './UsersObservationsRoute'
//const UserObservationsRoute =lazy(()=>import ('./UsersObservationsRoute'))

export const UserRoutes = [
   <ProtectedRoute
      key='UserObservations'
      exact
      path={USER_OBSERVATIONS_LIST}
      component={UserObservationsRoute}
   ></ProtectedRoute>
]
