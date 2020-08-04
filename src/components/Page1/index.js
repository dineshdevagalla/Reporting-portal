import React, { Component } from 'react'
import { ObservationTableLayout } from '../../Common/components/ObservationsTableLayOut'
import { DesktopHeader } from '../../Common/components/DesktopHeader'
import { TableWithPagination } from '../../Common/components/TableWithPagination'
import { withRouter } from 'react-router-dom'
import {
   DesktopLayout,
   DesktopInnerLayout,
   ReportingDesktopLayout
} from './styledComponents'
import { ObservationTextAndButton } from '../../Common/components/ObservationsTextAndButton'
import ReportingForm from '../../Common/components/ReportingForm'
import ReportedForm from '../../Common/components/ReportedForm'
import { USER_OBSERVATIONS_LIST } from '../../User/constants/NavigationConstants/navigationConstants'

class Page1 extends Component {
   goto = () => {
      console.log(this.props.history)
      this.props.history.push(USER_OBSERVATIONS_LIST)
   }
   render() {
      return (
         <DesktopLayout>
            <button onClick={this.goto}>Go to ReportingPortal</button>
            <DesktopHeader />
            <ReportingDesktopLayout>
               <ReportedForm />
            </ReportingDesktopLayout>
         </DesktopLayout>
      )
   }
}

export default withRouter(Page1)
