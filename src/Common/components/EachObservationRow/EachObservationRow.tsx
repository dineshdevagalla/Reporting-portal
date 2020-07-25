import React, { Component } from 'react'

import {
   Typo12SteelHKGroteskRegular,
   Typo14SteelHKGroteskRegular
} from '../../styleGuide/Typos'
import { StatusOrSeverityCell } from '../StatusOrSeverityCell'
import { ImageField } from '../ImageField'

import {
   TableRow,
   TableCell,
   PersonDetailsCell,
   NameAndPhoneNumberWrapper
} from './styledComponents'

interface ObservationType {
   eachObservation: any
   onClickEachObservation?: () => void
}
class EachObservationRow extends Component<ObservationType> {
   reportedOnorAssignedToCell = (observationObject, key) => {
      return (
         <TableCell>
            <PersonDetailsCell>
               <ImageField
                  imageUrl={observationObject[key].profile_pic}
                  width='32px'
                  height='32px'
               />
               <NameAndPhoneNumberWrapper>
                  <Typo14SteelHKGroteskRegular>
                     {observationObject[key].name}
                  </Typo14SteelHKGroteskRegular>
                  <Typo12SteelHKGroteskRegular>
                     {observationObject[key].phone_no}
                  </Typo12SteelHKGroteskRegular>
               </NameAndPhoneNumberWrapper>
            </PersonDetailsCell>
         </TableCell>
      )
   }
   eachRowDataObject = () => {
      const { eachObservation } = this.props
      return Object.keys(eachObservation).map(key => {
         if (key === 'assignedTo' || key == 'reportedBy') {
            if (key == 'assignedTo') {
               return this.reportedOnorAssignedToCell(eachObservation, key)
            } else {
               return this.reportedOnorAssignedToCell(eachObservation, key)
            }
         } else if (key === 'status' || key === 'severity') {
            return (
               <TableCell>
                  {' '}
                  <StatusOrSeverityCell
                     cellType={key}
                     value={eachObservation[key]}
                  />
               </TableCell>
            )
         } else if (key !== 'observationId' && key !== 'showDueDate') {
            return (
               <TableCell>
                  <Typo12SteelHKGroteskRegular>
                     {eachObservation[key]}
                  </Typo12SteelHKGroteskRegular>
               </TableCell>
            )
         }
      })
   }

   onRowClick = () => {
      const { onClickEachObservation } = this.props
   }

   render() {
      const { eachObservation } = this.props
      return (
         <TableRow id={eachObservation.observationId} onClick={this.onRowClick}>
            {this.eachRowDataObject()}
         </TableRow>
      )
   }
}

export default EachObservationRow
