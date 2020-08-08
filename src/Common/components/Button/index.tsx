import React from 'react'
import { buttontypes, varientTypes } from './buttonConstants'
import { BaseButton } from './BaseButton/BaseButton'
import { OutlineButton, OvalType, RectangleType } from './styledComponent'
import { SerializedStyles } from '@emotion/core'

interface ButtonProps {
   varient: any
   type: any
   text: string | any
   className: any
   onClickButton: () => void
}

class Button extends React.Component<ButtonProps> {
   static defaultProps = {
      type: buttontypes.filled,
      varient: varientTypes.oval
   }

   static defaultTypes = {
      type: buttontypes,
      varient: varientTypes
   }

   varientTypes = () => {
      const { varient } = this.props

      switch (varient) {
         case varientTypes.oval:
            return OvalType

         case varientTypes.rectangle:
            return RectangleType
         default:
            return console.warn('Iavalid Type')
      }
   }

   render() {
      const { type, varient, ...otherProps } = this.props

      switch (type) {
         case buttontypes.filled:
            return (
               <BaseButton
                  {...otherProps}
                  customisedStyles={this.varientTypes()}
               />
            )
         case buttontypes.outline:
            return (
               <OutlineButton
                  {...otherProps}
                  customisedStyles={this.varientTypes()}
               />
            )
      }
   }
}

export { Button }
