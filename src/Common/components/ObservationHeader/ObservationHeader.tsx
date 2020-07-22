import React, { Component } from 'react'

import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'

import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

import { withTranslation, WithTranslation } from 'react-i18next'

import {
   rpObservationTableHeaderConstants,
   userObservationTableHeaderConstants,
   adminObservastionTableHeaderConstants,
   roleType
} from '../../constants/ObservationConstans'
import { Typo12DarkBlueGreyHKGroteskSemiBold } from '../../styleGuide/Typos'

import {
   TableRow,
   TableHeader,
   ReportedOnSpan,
   DueDateSpan
} from './styleComponets'

@observer
class ObservationHeader extends Component {
   @observable changestateFromASCtoDSCForReportedOn = false
   @observable changestateFromASCtoDSCForDuedate = false
   @observable observationHeaderList: Array<string> = []

   onClickReportedOn = () => {
      this.changestateFromASCtoDSCForReportedOn = !this
         .changestateFromASCtoDSCForReportedOn
      if (this.changestateFromASCtoDSCForReportedOn) {
      }
   }
   onClickDueDate = () => {
      this.changestateFromASCtoDSCForDuedate = !this
         .changestateFromASCtoDSCForDuedate
      if (this.changestateFromASCtoDSCForDuedate) {
      }
   }
   @action.bound
   ObservationHeader() {
      return this.observationHeaderList.map(eachHeader => {
         if (eachHeader == 'Reported On') {
            return (
               <TableHeader>
                  <ReportedOnSpan
                     className='flex'
                     onClick={this.onClickReportedOn}
                  >
                     {eachHeader}
                     {this.changestateFromASCtoDSCForReportedOn ? (
                        <IoMdArrowDropdown />
                     ) : (
                        <IoMdArrowDropup />
                     )}
                  </ReportedOnSpan>
               </TableHeader>
            )
         } else if (eachHeader == 'Due-Date') {
            return (
               <TableHeader>
                  <DueDateSpan onClick={this.onClickDueDate}>
                     {eachHeader}
                     {this.changestateFromASCtoDSCForReportedOn ? (
                        <IoMdArrowDropdown />
                     ) : (
                        <IoMdArrowDropup />
                     )}
                  </DueDateSpan>
               </TableHeader>
            )
         } else {
            return (
               <TableHeader>
                  <Typo12DarkBlueGreyHKGroteskSemiBold>
                     {eachHeader}
                  </Typo12DarkBlueGreyHKGroteskSemiBold>
               </TableHeader>
            )
         }
      })
   }

   renderingObservationHeader = () => {
      if (roleType.user === 'USER') {
         this.observationHeaderList = userObservationTableHeaderConstants
         return this.ObservationHeader()
      } //else if (roleType.admin === 'ADMIN') {
      //    this.observationHeaderList = adminObservastionTableHeaderConstants
      //    return this.ObservationHeader()
      // } else if (roleType.rp === 'RP') {
      //    this.observationHeaderList = rpObservationTableHeaderConstants
      //    return this.ObservationHeader()
      // }
   }
   render() {
      return <TableRow>{this.renderingObservationHeader()}</TableRow>
   }
}

export default ObservationHeader
