import React, { Component } from 'react'
import Select from 'react-select'
import './index.css'
interface SelectProps {
   options?: any
   selectedOption?: any
   isMulti?: boolean
   defaultValue?: any
   className?: any
   isDisabled?: any
   placeholder?: any
}
class ReactSelect extends Component<SelectProps> {
   handleChange = () => {}
   render() {
      const {
         options,
         selectedOption,
         isMulti,
         defaultValue,
         className,
         isDisabled,
         placeholder
      } = this.props
      return (
         <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            isMulti={isMulti}
            defaultValue={defaultValue}
            className={className}
            isDisabled={isDisabled}
            placeholder={placeholder}
         />
      )
   }
}

export default ReactSelect
