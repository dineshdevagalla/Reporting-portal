import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Provider } from 'mobx-react'
import { I18nextProvider } from 'react-i18next'
import stores from './Common/stores'
import HomePage from './components/HomePage'
import Page1 from './components/Page1'
import './App.css'
import i18n from './Common/i18n'
import { UserRoutes } from './User/routes/'
import UsersObservationsRoute from './User/routes/UsersObservationsRoute/'
const App = () => {
   return (
      <Provider {...stores}>
         <I18nextProvider i18n={i18n}>
            <Suspense fallback={<div>Dinesh....</div>}>
               <Router basename={process.env.PUBLIC_URL}>
                  <Switch>
                     {UserRoutes}
                     <Route exact path='/page-1'>
                        <UsersObservationsRoute />
                     </Route>
                     <Route path='/'>
                        <HomePage />
                     </Route>
                  </Switch>
               </Router>
            </Suspense>
         </I18nextProvider>
      </Provider>
   )
}

export default App
