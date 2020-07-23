import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import { RadioGroup, RadioButton } from 'react-radio-buttons'
import {
   RadioButtonWrapper,
   ButtonText,
   ButtonTextAndButtonWrapper
} from './styledComponents'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils'
interface RadioButtonProps {
   onChangeRadioButton?: () => void
   buttonState?: string
}
@observer
class RadioButtons extends Component<RadioButtonProps> {
   @observable buttonState = ''
   @observable dueDateState = true
   onChangeRadioButton = event => {
      console.log(event.target.id)
      // this.dueDateState = event.target.value == 'public' ? true : false
      this.buttonState = event.target.value
   }
   render() {
      console.log(this.buttonState, 'radio')
      const { onChangeRadioButton, buttonState } = this.props
      return (
         <RadioButtonWrapper>
            <ButtonTextAndButtonWrapper>
               <ButtonText>public</ButtonText>
               <input
                  type='radio'
                  id='public'
                  name='public'
                  onClick={this.onChangeRadioButton}
                  value='public'
                  checked={this.buttonState === 'public'}
               />
            </ButtonTextAndButtonWrapper>
            <ButtonTextAndButtonWrapper>
               <ButtonText>private</ButtonText>
               <input
                  type='radio'
                  id='private'
                  name='public'
                  onClick={this.onChangeRadioButton}
                  value='private'
                  checked={this.buttonState === 'private'}
               />
            </ButtonTextAndButtonWrapper>
         </RadioButtonWrapper>
      )
   }
}

export default RadioButtons
