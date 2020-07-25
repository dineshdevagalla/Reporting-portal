import React, { Component } from 'react'

import ReactPaginate from 'react-paginate'
import './index.css'
import { observer } from 'mobx-react'
interface onPageChangeProp {
   onCurrentPageChanges?: () => void
}
@observer
class ReactPagination extends Component<onPageChangeProp> {
   pageCount = 10
   currentPage = 1
   observationsPerPage = 10

   updateCurrentPage = currentPage => {
      const { onCurrentPageChanges } = this.props
   }
   render() {
      const { pageCount, currentPage, updateCurrentPage } = this
      return (
         <ReactPaginate
            pageCount={pageCount}
            forcePage={currentPage}
            disabledInitialCallBack={true}
            pageRangeDisplayed={1}
            marginPagesDisplayed={2}
            previousLabel={
               <button className='arrowButton flex justify-center items-center p-1 h-6 w-4 m-1'>
                  &lt;
               </button>
            }
            nextLabel={
               <button className='arrowButton flex justify-center items-center p-1 h-6 w-4 m-1'>
                  &gt;
               </button>
            }
            onPageChange={updateCurrentPage}
            containerClassName='flex'
            pageClassName='flex justify-center rounded-sm  items-center p-2 h-6 w-6 m-1'
            activeClassName='active border-solid borderColor p-1 '
         />
      )
   }
}
export default ReactPagination
