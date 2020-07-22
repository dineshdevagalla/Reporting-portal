import React, { Component } from 'react'

import { ObservationTableLayout } from '../ObservationsTableLayOut'
import ReactPagination from '../ReactPagination'

import {
   TableWithPaginationContainer,
   PaginationBar,
   FilterContainer
} from './styledComponents'
import { FilterComponent } from '../FilterComponent'

export default class TableWithPagination extends Component {
   render() {
      return (
         <TableWithPaginationContainer>
            <FilterContainer>
               <FilterComponent />
            </FilterContainer>
            <ObservationTableLayout />
            <PaginationBar>
               <ReactPagination />
            </PaginationBar>
         </TableWithPaginationContainer>
      )
   }
}
