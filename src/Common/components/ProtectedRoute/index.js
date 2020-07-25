import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getAccessToken } from '../../../utils/StorageUtils.js'

import { observer } from 'mobx-react'

class ProtectedRoute extends React.Component {
   render() {
      const { path, component } = this.props
      console.log('producted Route some x', path)
      if (getAccessToken()) {
         return <Route exact path={path} component={component} />
      } else {
         return <Route exact path={path} component={component} />
         //return <Redirect to={{pathname:signInPath}}/>
      }
   }
}

export { ProtectedRoute }
