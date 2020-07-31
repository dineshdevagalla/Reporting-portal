import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Colors } from '../../themes/Colors'
import { Typo14SteelHKGroteskRegular } from '../../styleGuide/Typos'
const TableRow = styled.tr`
   ${tw``}
   border:1px solid black;
`
const TableCell = styled.td`
   border: 1px solid ${Colors.lightBlueGrey};
   ${tw``}
`
const PersonDetailsCell = styled.div`
   ${tw`flex items-center`}
`
const NameAndPhoneNumberWrapper = styled.div`
   ${tw`flex flex-col justify-center items-center`}
   margin-left:10px;
   padding: 5px;
`
const PrivacyTex = styled(Typo14SteelHKGroteskRegular)`
   ${tw``}
   padding:5px;
`
export {
   TableRow,
   TableCell,
   PersonDetailsCell,
   NameAndPhoneNumberWrapper,
   PrivacyTex
}
