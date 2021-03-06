import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Colors } from '../../../Common/themes/Colors'
interface styleProps {
   value: string
   stateText: string
}
const TabBarView = styled.div`
   ${tw` flex `}
`
const AssignedToMeText = styled.button<styleProps>`
   ${tw`focus:outline-none`}
   font-family: HKGrotesk;
   font-size: 18px;
   margin-right: 20px;
   font-weight: bold;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: normal;
   color: ${props =>
      props.stateText === 'assignedToMe' ? Colors.brightBlue : Colors.steel};
`
const MyObservationsText = styled.button<styleProps>`
   ${tw`focus:outline-none`}
   font-family: HKGrotesk;
   font-size: 18px;
   font-weight: bold;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: normal;
   color: ${props =>
      props.stateText === 'myObservations' ? Colors.brightBlue : Colors.steel};
`

export { TabBarView, AssignedToMeText, MyObservationsText }
