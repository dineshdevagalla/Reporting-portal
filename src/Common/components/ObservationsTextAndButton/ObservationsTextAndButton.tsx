import React, { Component } from 'react'
import { Typo32BrightBlueHKGroteskMedium } from '../../styleGuide/Typos'
import { TextAndButtonContainer } from './styledComponents'
import './index.css'
import { Button } from '../Button'

export interface AddnewObservationProps {
   onClickAddNewObservation?: any
}
class ObservationsTextAndButton extends Component<AddnewObservationProps> {
   render() {
      const { onClickAddNewObservation } = this.props
      return (
         <TextAndButtonContainer>
            <Typo32BrightBlueHKGroteskMedium>
               List Of Observations
            </Typo32BrightBlueHKGroteskMedium>
            <Button
               onClickButton={onClickAddNewObservation}
               className={'buttonStyles'}
               text='+ Add New'
               type={Button.defaultTypes.type.filled}
               varient={Button.defaultTypes.varient.oval}
            />
         </TextAndButtonContainer>
      )
   }
}

export default ObservationsTextAndButton
