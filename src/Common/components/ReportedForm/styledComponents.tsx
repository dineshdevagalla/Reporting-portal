import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Colors } from '../../themes/Colors'
import {
   Typo24DarkBlueGreyHKGroteskMedium,
   Typos16darkBlueGreyHKGroteskLight,
   Typo12DarkBlueGreyHKGroteskSemiBold
} from '../../styleGuide/Typos'

const TitleTextAndBackTickContainer = styled.div`
   ${tw`flex  items-center `}
   margin-bottom: 10px;
`

const TitleText = styled(Typo24DarkBlueGreyHKGroteskMedium)`
   margin-left: 3px;
`

const DescriptionText = styled(Typos16darkBlueGreyHKGroteskLight)`
   margin-bottom: 20px;
`

const StatusContainer = styled.div`
   ${tw`flex  justify-between  items-center`}
   width:25%;

   margin: 20px;
`

const StatusText = styled(Typo12DarkBlueGreyHKGroteskSemiBold)``

const AssignedToText = styled(Typo12DarkBlueGreyHKGroteskSemiBold)``

const AssignedToContainer = styled.div`
   ${tw`flex  justify-between  items-center`}
   width:25%;
   margin: 20px;
`

const ReportedFormContainer = styled.div`
   ${tw` flex flex-col`}
   padding:60px;
   border: 1px solid ${Colors.lightBlueGrey};
   background-color: 1px solid ${Colors.lightBlueGrey};
`
const TitleOfTheObservationText = styled.div`
   ${tw`flex justify-between  items-center`}
   width:25%;
   margin: 20px;
`

const SelectCategoriesAndSubCategoriesConatiner = styled.div`
   ${tw`flex  items-center justify-around`}
   width:55%;
`

const SelecteCategoriesText = styled.div`
   ${tw`flex  justify-between  items-center`}
   width:50%;
   margin: 20px;
`

const SelectSubCategoriesText = styled.div`
   ${tw`flex  justify-between items-center`}

   margin: 20px;
   width: 50%;
`

const SeverityText = styled.div`
   ${tw`flex  justify-between  items-center`}
   width:25%;
   margin: 20px;
`

const AttachementsText = styled.div`
   ${tw`flex  items-center`}
`

const SubmitButton = styled.div`
   ${tw`flex justify-center items-center
`}
`

const ReportedOnText = styled(Typo12DarkBlueGreyHKGroteskSemiBold)``

const ReportedOnConatiner = styled.div`
   ${tw`flex  justify-between  items-center`}
   width:25%;
   margin: 20px;
`

const DueDateContainer = styled.div`
   ${tw`flex  justify-between  items-center`}
   width:25%;
   margin: 20px;
`

const DueDateAndRadioButtonsConatiner = styled.div`
   ${tw``}
`
const DueDateText = styled(Typo12DarkBlueGreyHKGroteskSemiBold)``

export {
   ReportedFormContainer,
   TitleTextAndBackTickContainer,
   TitleText,
   DescriptionText,
   SelectCategoriesAndSubCategoriesConatiner,
   SelecteCategoriesText,
   SelectSubCategoriesText,
   StatusContainer,
   StatusText,
   SeverityText,
   AttachementsText,
   AssignedToContainer,
   AssignedToText,
   ReportedOnConatiner,
   ReportedOnText,
   DueDateContainer,
   DueDateText,
   DueDateAndRadioButtonsConatiner,
   SubmitButton
}
