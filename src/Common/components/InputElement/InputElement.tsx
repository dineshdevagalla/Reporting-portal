import React, { Component } from 'react'
import { InputTextContainer, InputField } from './styledComponents'

interface inputProps {
   value?: string
   onChange?: () => void
   className?: any
   readonly?: string
}
export default class InputElement extends Component<inputProps> {
   render() {
      const { value, onChange, className, readonly } = this.props
      return (
         <InputTextContainer>
            <InputField
               value={value}
               onChange={onChange}
               className={className}
            ></InputField>
         </InputTextContainer>
      )
   }
}
