import React, { Component } from 'react'
import { ObservationTableLayout } from '../../Common/components/ObservationsTableLayOut'
import { DesktopHeader } from '../../Common/components/DesktopHeader'
import { TableWithPagination } from '../../Common/components/TableWithPagination'
import {
   DesktopLayout,
   DesktopInnerLayout,
   ReportingDesktopLayout
} from './styledComponents'
import { ObservationTextAndButton } from '../../Common/components/ObservationsTextAndButton'
import ReportingForm from '../../Common/components/ReportingForm'

import ReportedForm from '../../Common/components/ReportedForm'
export default class Page1 extends Component {
   render() {
      return (
         <DesktopLayout>
            <DesktopHeader />
            <ReportingDesktopLayout>
               <ReportedForm />
            </ReportingDesktopLayout>
         </DesktopLayout>
      )
   }
}

//<DesktopInnerLayout>
// <ObservationTextAndButton />
// <TableWithPagination />
// </DesktopInnerLayout>

//
{
   /* <DesktopInnerLayout>
               <ObservationTextAndButton />
               <TableWithPagination />
            </DesktopInnerLayout> */
}
