import React, { Component } from 'react'
import { Typo12WhiteHKGroteskBold } from '../../styleGuide/Typos'
interface CellProps {
   cellType: any
   value: string
}

import { StatusDiv, SeverityDiv } from './styledComponents'
class StatusOrSeverityCell extends Component<CellProps> {
   renderingCell = (cellType, value) => {
      if (cellType === 'status') {
         return <StatusDiv>{value}</StatusDiv>
      } else if (cellType === 'severity') {
         return (
            <SeverityDiv color={value}>
               <Typo12WhiteHKGroteskBold>{value}</Typo12WhiteHKGroteskBold>
            </SeverityDiv>
         )
      }
   }
   render() {
      const { cellType, value } = this.props
      return (
         <div className='flex justify-center items center'>
            {this.renderingCell(cellType, value)}
         </div>
      )
   }
}

export default StatusOrSeverityCell
