import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { BaseButton } from './BaseButton/BaseButton'
import { css } from '@emotion/core'
interface ButtonProps {
   varient: any
   type: any
   text: string
   className: any
   onClickButton: () => void
   css: any
}

export const OutlineButton = styled(BaseButton)`
   background-color: white;
   color: black;
   ${tw`flex justify-center items-center`}
`

export const OvalType = css`
   border-radius: 4px;
`

export const RectangleType = css`
   border-radius: 0px;
`
