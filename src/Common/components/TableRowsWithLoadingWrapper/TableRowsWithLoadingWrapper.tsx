import React from 'react'

import { observer } from 'mobx-react'
import LoadingWrapperWithFailure from '../LoadingWrapperWithFailure/LoadingWrapperWithFailure'
import { EachObservationRow } from '../EachObservationRow'
import { CommonObservationProps } from '../CommonObservationsLayout/CommonObservationsLayout'
@observer
class TableRowsWithLoadingWrapper extends React.Component<
   CommonObservationProps
> {
   renderSuccessUI = observer(() => {
      const { listOfObservations, onClickEachObservation } = this.props
      return listOfObservations.map(eachObservationObject => (
         <EachObservationRow
            key={eachObservationObject.observationId}
            onClickEachObservation={onClickEachObservation}
            eachObservation={eachObservationObject}
         />
      ))
   })

   onRetryclick = () => {
      const { onClickRetry } = this.props
      onClickRetry()
   }
   render() {
      const {
         observationsListAPIError,
         onClickSortField,
         observationsListAPIStatus,

         onClickEachObservation
      } = this.props

      return (
         <LoadingWrapperWithFailure
            apiStatus={observationsListAPIStatus}
            apiError={observationsListAPIError}
            onRetry={this.onRetryclick}
            renderSuccessUI={this.renderSuccessUI}
         />
      )
   }
}

export default TableRowsWithLoadingWrapper
