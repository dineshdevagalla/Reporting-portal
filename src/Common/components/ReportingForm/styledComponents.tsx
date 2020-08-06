import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Colors } from '../../themes/Colors'
const BackToObservationText = styled.button`
   ${tw`flex  items-center   focus:outline-none`}
`

const ReportingFormContainer = styled.div`
   ${tw` flex flex-col`}
   padding:20px;
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
const DescriptionText = styled.div`
   ${tw`flex justify-between  items-center`}
   width:50%;
   margin: 20px;
`
const AttachementsText = styled.div`
   ${tw`flex  items-center`}
`
const SubmitButton = styled.div`
   ${tw`flex justify-center items-center
`}
`
export {
   BackToObservationText,
   ReportingFormContainer,
   TitleOfTheObservationText,
   SelectCategoriesAndSubCategoriesConatiner,
   SelecteCategoriesText,
   SelectSubCategoriesText,
   SeverityText,
   DescriptionText,
   AttachementsText,
   SubmitButton
}
