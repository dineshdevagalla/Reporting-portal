import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getAccessToken } from '../../../utils/StorageUtils.js'

import { observer } from 'mobx-react'

class ProtectedRoute extends React.Component {
   render() {
      const { path, component: Component } = this.props
      console.log(path, Component, 'protectedRoute')
      return <Route exact path={path} component={Component} />
   }
}

export default ProtectedRoute
// if (getAccessToken()) {
//    return <Route exact path={path} component={Component} />
// } else {
//    return <Route exact path={path} component={Component} />
//    //return <Redirect to={{pathname:signInPath}}/>
// }
