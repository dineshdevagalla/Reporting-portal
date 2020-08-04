import React, { Component } from 'react'
import Select from 'react-select'
import './index.css'
import { observer } from 'mobx-react'
interface SelectProps {
   options?: any
   selectedOption?: any
   isMulti?: boolean
   defaultValue?: any
   className?: any
   isDisabled?: any
   placeholder?: any
   onChange?: any
}

@observer
class ReactSelect extends Component<SelectProps> {
   render() {
      const {
         options,
         selectedOption,
         isMulti,
         defaultValue,
         className,
         isDisabled,
         placeholder,
         onChange
      } = this.props
      return (
         <Select
            value={selectedOption}
            onChange={onChange}
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
