import styled from '@emotion/styled'

import tw from 'tailwind.macro'
import { SerializedStyles } from '@emotion/core'
interface ButtonProps {
   css: any
}

export const ButtonWrapper = styled.button<ButtonProps>`
   ${tw`flex items-center justify-center focus:outline-none`}
   ${props => props.css}
   background-color:#0b69ff;
`
