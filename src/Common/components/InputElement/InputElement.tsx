import React, { Component } from 'react'
import { InputTextContainer, InputField } from './styledComponents'

interface inputProps {
   value?: string
   onChange?: (event: any) => void
   className?: any
   placeholder?: string
   disabled?: any
}
export default class InputElement extends Component<inputProps> {
   render() {
      const { value, onChange, className, disabled, placeholder } = this.props
      return (
         <InputField
            value={value}
            onChange={onChange}
            className={className}
            placeholder={placeholder}
            disabled={disabled}
         ></InputField>
      )
   }
}
