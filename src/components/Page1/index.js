import React, { Component } from 'react'
import { ObservationTableLayout } from '../../Common/components/ObservationsTableLayOut'
import { RpTabSwitch } from '../../Rp/components/RpTabSwitch'
export default class Page1 extends Component {
   render() {
      return (
         <div>
            <ObservationTableLayout />
            <RpTabSwitch />
         </div>
      )
   }
}
