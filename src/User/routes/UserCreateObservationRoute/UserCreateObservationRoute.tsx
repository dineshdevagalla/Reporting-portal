import React, { Component } from 'react'
import { ReportingDesktopLayout } from './styledComponents'
import {inject,observer} from 'mobx-react'
import ReportingForm from '../../../Common/components/ReportingForm'
import {HocProps} from '../../../Common/hoc/WithCommonHeader/WithCommonHeader'
import WithCommonHeader from '../../../Common/hoc/WithCommonHeader'


interface CreateObservationRouteProps extends  HocProps{


}


class UserCreateObservationRoute extends Component<CreateObservationRouteProps>{


   render() {
      return (
         <ReportingDesktopLayout>
            <ReportingForm />
         </ReportingDesktopLayout>
      )
   }
}

export default UserCreateObservationRoute
