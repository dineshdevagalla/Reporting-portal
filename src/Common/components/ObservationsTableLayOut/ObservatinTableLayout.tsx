import React, { Component } from 'react'

import { ObservationHeader } from '../ObservationHeader'
import { EachObservationRow } from '../EachObservationRow'
import { TableRowsWithLoadingWrapper } from '../TableRowsWithLoadingWrapper'
import { observer } from 'mobx-react'
import './index.css'
import LoadingWrapperWithFailure from '../LoadingWrapperWithFailure/LoadingWrapperWithFailure'
import { CommonObservationProps } from '../CommonObservationsLayout/CommonObservationsLayout'
@observer
class ObservatinTableLayout extends Component<CommonObservationProps> {
   render() {
      const {
         observationsListAPIError,
         onClickSortField,
         observationsListAPIStatus,
         listOfObservations,

         onClickEachObservation,
         onClickRetry
      } = this.props
      return (
         <table className='tablecss'>
            <ObservationHeader onClickSortField={onClickSortField} />

            <TableRowsWithLoadingWrapper
               onClickSortField={onClickSortField}
               observationsListAPIError={observationsListAPIError}
               observationsListAPIStatus={observationsListAPIStatus}
               listOfObservations={listOfObservations}
               onClickEachObservation={onClickEachObservation}
               onClickRetry={onClickRetry}
            />
         </table>
      )
   }
}

export default ObservatinTableLayout
