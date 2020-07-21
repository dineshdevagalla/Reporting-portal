import React, { Component } from 'react'
import observationsData from '../../../User/fixtures/UsersObservation.json'

import { ObservationHeader } from '../ObservationHeader'
import { EachObservationRow } from '../EachObservationRow'

import './index.css'

class ObservatinTableLayout extends Component {
   renderingEachObservationCell = () => {
      return observationsData.map(eachObservationObject => (
         <EachObservationRow eachObservation={eachObservationObject} />
      ))
   }
   render() {
      return (
         <table className='tablecss'>
            <ObservationHeader />
            {this.renderingEachObservationCell()}
         </table>
      )
   }
}

export default ObservatinTableLayout
