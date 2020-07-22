import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/core'
interface ButtonProps {
   css: any
}

export const ButtonWrapper = styled.button<ButtonProps>`
   ${props => props.css}
   background-color:#0b69ff;
`
