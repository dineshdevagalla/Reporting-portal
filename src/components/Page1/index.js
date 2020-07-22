import React, { Component } from 'react'
import { ObservationTableLayout } from '../../Common/components/ObservationsTableLayOut'
import { DesktopHeader } from '../../Common/components/DesktopHeader'
import { TableWithPagination } from '../../Common/components/TableWithPagination'
import { DesktopLayout, DesktopInnerLayout } from './styledComponents'
import { ObservationTextAndButton } from '../../Common/components/ObservationsTextAndButton'
export default class Page1 extends Component {
   render() {
      return (
         <DesktopLayout>
            <DesktopHeader />

            <DesktopInnerLayout>
               <ObservationTextAndButton />
               <TableWithPagination />
            </DesktopInnerLayout>
         </DesktopLayout>
      )
   }
}
