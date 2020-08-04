import React from 'react'

import { ButtonWrapper } from './styledComponent'
import { SerializedStyles } from '@emotion/core'
interface ButtonProps {
   text: any
   className: any
   onClickButton?: () => void
   customisedStyles: any
}

class BaseButton extends React.Component<ButtonProps> {
   render() {
      const { text, className, onClickButton, customisedStyles } = this.props

      return (
         <ButtonWrapper
            css={customisedStyles}
            className={className}
            onClick={onClickButton}
         >
            {text}
         </ButtonWrapper>
      )
   }
}

export { BaseButton }
