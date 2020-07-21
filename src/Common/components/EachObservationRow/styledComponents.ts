import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Colors } from '../../themes/Colors'
const TableRow = styled.tr`
   ${tw``}
`
const TableCell = styled.td`
   border: 1px solid ${Colors.lightBlueGrey};
   ${tw``}
`
const PersonDetailsCell = styled.div`
   ${tw`flex`}
`
const NameAndPhoneNumberWrapper = styled.div`
   ${tw`flex flex-col justify-center items-center`}
   margin-left:10px;
   padding: 5px;
`

export { TableRow, TableCell, PersonDetailsCell, NameAndPhoneNumberWrapper }
