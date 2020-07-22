import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Colors } from '../../themes/Colors'
export const InputTextContainer = styled.div`
   ${tw``}
`
export const InputField = styled.input`
   ${tw``}
   width:100px;
   padding: 20px;
   overflow: auto;
   border: 1px solid ${Colors.darkBlueGrey};
   background-color: ${Colors.white};
`
