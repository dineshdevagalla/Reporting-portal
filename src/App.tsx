import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'

import stores from './Common/stores'
import HomePage from './components/HomePage'
import Page1 from './components/Page1'
import './App.css'

import { UserRoutes } from './User/routes/'

const App = () => {
   return (
      <Provider {...stores}>
         <Suspense fallback={<div>Dinesh....</div>}>
            <Router basename={process.env.PUBLIC_URL}>
               <Switch>
                  <Route exact path='/page-1'>
                     <Page1 />
                  </Route>
                  {UserRoutes}
                  <Route exact path='/'>
                     <HomePage />
                  </Route>
               </Switch>
            </Router>
         </Suspense>
      </Provider>
   )
}

export default App
