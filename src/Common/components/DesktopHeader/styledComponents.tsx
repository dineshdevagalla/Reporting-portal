import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Colors } from '../../themes/Colors'
const DesktopConatiner = styled.div`
   ${tw`flex  items-center`}
   padding:5px;
   margin-bottom: 10px;
   border-bottom: 1px solid ${Colors.lightBlueGrey};
   background-color: ${Colors.white};
`
const ImageAndTextContainer = styled.div`
   ${tw`flex justify-start items-center`}
   width:60%;
`
const TabBarComponent = styled.div`
   ${tw` flex`}
`
const ProfileConatiner = styled.div`
   ${tw``}
`
const SwitchingDetails = styled.div`
   ${tw` flex justify-between items-center`}
   width:40%;
`
const ReportingPortalText = styled.p`
   ${tw``}
   margin-left:20px;
`
export {
   DesktopConatiner,
   ReportingPortalText,
   ImageAndTextContainer,
   TabBarComponent,
   ProfileConatiner,
   SwitchingDetails
}
