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
const TotalObservationsText = styled.button<styleProps>`
   ${tw`focus:outline-none`}
   font-family: HKGrotesk;
   font-size: 18px;
   font-weight: bold;
   font-stretch: normal;
   font-style: normal;
   margin-right: 20px;
   line-height: 1.33;
   letter-spacing: normal;
   color: ${props =>
      props.stateText === 'totalObservations'
         ? Colors.brightBlue
         : Colors.steel};
`
const Categories = styled.button<styleProps>`
   ${tw`focus:outline-none`}
   font-family: HKGrotesk;
   font-size: 18px;
   font-weight: bold;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: normal;
   color: ${props =>
      props.stateText === 'categories' ? Colors.brightBlue : Colors.steel};
`

export { TabBarView, TotalObservationsText, Categories }
