import React, { Component } from 'react'
import { ObservationTextAndButton } from '../ObservationsTextAndButton'
import { TableWithPagination } from '../TableWithPagination'
import { DesktopInnerLayout } from './styledComponents'
import { observer } from 'mobx-react'
export interface OnClickaddNewPageprops {
   onClickAddNewObservation?: () => void
}
export interface CommonObservationProps {
   onClickSelectFilter?: () => void
   onClickSortField?: () => void
   onCurrentPageChanges?: () => void
   onClickEachObservation: (event: any) => void
   listOfObservations: any
   observationsListAPIStatus?: any
   observationsListAPIError?: any
   onClickRetry?: any
}
@observer
class CommonObservationsLayout extends Component<
   CommonObservationProps & OnClickaddNewPageprops
> {
   render() {
      const {
         onClickAddNewObservation,
         observationsListAPIError,
         onClickSelectFilter,
         onClickSortField,
         observationsListAPIStatus,
         listOfObservations,
         onCurrentPageChanges,
         onClickEachObservation,
         onClickRetry
      } = this.props
      return (
         <DesktopInnerLayout>
            <ObservationTextAndButton
               onClickAddNewObservation={onClickAddNewObservation}
            />
            <TableWithPagination
               listOfObservations={listOfObservations}
               observationsListAPIStatus={observationsListAPIStatus}
               observationsListAPIError={observationsListAPIError}
               onClickRetry={onClickRetry}
               onClickSelectFilter={onClickSelectFilter}
               onClickSortField={onClickSortField}
               onClickEachObservation={onClickEachObservation}
            />
         </DesktopInnerLayout>
      )
   }
}

export default CommonObservationsLayout
