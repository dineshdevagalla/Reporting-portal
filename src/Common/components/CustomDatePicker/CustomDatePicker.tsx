import React, { Component } from 'react'

import { DatePickerElement } from './styledComponents'
type DatePickerTypes = {
   onChangeDatePicker: () => void
   value?: any
   disabled?: any
}
class CustomDatePicker extends Component<DatePickerTypes> {
   render() {
      const { onChangeDatePicker, value, disabled } = this.props
      return (
         <DatePickerElement
            className=''
            type='Date'
            value={value}
            onChange={onChangeDatePicker}
            disabled={disabled}
         />
      )
   }
}

export default CustomDatePicker
