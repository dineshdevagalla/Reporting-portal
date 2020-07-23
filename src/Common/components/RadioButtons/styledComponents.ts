import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Typo12DarkBlueGreyHKGroteskSemiBold } from '../../styleGuide/Typos'

const RadioButtonWrapper = styled.div`
   ${tw`flex`}
   margin-top:20px;
`

const ButtonText = styled(Typo12DarkBlueGreyHKGroteskSemiBold)`
   ${tw``}
   margin-right :5px;
`
const ButtonTextAndButtonWrapper = styled.div`
   ${tw`flex`}
   margin:5px;
`

export { RadioButtonWrapper, ButtonText, ButtonTextAndButtonWrapper }
