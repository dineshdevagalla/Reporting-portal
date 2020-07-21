import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Colors } from '../../../Common/themes/Colors'
interface styleProps {
   value: string
}
const TabBarView = styled.div`
   ${tw` flex  border-solid border-4`}
`
const AssignedToMeText = styled.button<styleProps>`
   ${tw``}
   font-family: HKGrotesk;
   font-size: 18px;
   font-weight: bold;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: normal;
   color: ${props =>
      props.value === 'assignedToMe' ? Colors.brightBlue : Colors.steel};
`
const MyObservationsText = styled.button<styleProps>`
   ${tw``}
   font-family: HKGrotesk;
   font-size: 18px;
   font-weight: bold;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: normal;
   color: ${props =>
      props.value === 'myObservations' ? Colors.brightBlue : Colors.steel};
`

export { TabBarView, AssignedToMeText, MyObservationsText }
