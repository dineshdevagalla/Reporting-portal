import React, { Component } from 'react'

import { ObservationTableLayout } from '../ObservationsTableLayOut'
import ReactPagination from '../ReactPagination'

import {
   TableWithPaginationContainer,
   PaginationBar,
   FilterContainer
} from './styledComponents'
import { FilterComponent } from '../FilterComponent'
import { CommonObservationProps } from '../CommonObservationsLayout/CommonObservationsLayout'
import { observer } from 'mobx-react'
@observer
class TableWithPagination extends Component<CommonObservationProps> {
   render() {
      const {
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
         <TableWithPaginationContainer>
            <FilterContainer>
               <FilterComponent onClickSelectFilter={onClickSelectFilter} />
            </FilterContainer>
            <ObservationTableLayout
               onClickRetry={onClickRetry}
               onClickEachObservation={onClickEachObservation}
               listOfObservations={listOfObservations}
               observationsListAPIStatus={observationsListAPIStatus}
               observationsListAPIError={observationsListAPIError}
               onClickSortField={onClickSortField}
            />
            <PaginationBar>
               <ReactPagination onCurrentPageChanges={onCurrentPageChanges} />
            </PaginationBar>
         </TableWithPaginationContainer>
      )
   }
}
export default TableWithPagination
