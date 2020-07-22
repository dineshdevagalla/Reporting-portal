import React, { Component } from 'react'
import Select from 'react-select'
interface SelectProps {
   options: any
   selectedOption: any
   isMulti: boolean
   defaultValue: any
}
class ReactSelect extends Component<SelectProps> {
   handleChange = () => {}
   render() {
      const { options, selectedOption, isMulti, defaultValue } = this.props
      return (
         <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            isMulti={isMulti}
            defaultValue={defaultValue}
         />
      )
   }
}

export default ReactSelect
