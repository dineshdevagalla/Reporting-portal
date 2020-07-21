import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Colors } from '../../themes/Colors'
export const TableRow = styled.tr`
   ${tw``}
`
export const TableHeader = styled.th`
   ${tw``}
   border: 1px solid ${Colors.lightBlueGrey};
   text-align: center;
`
export const ReportedOnSpan = styled.span`
   ${tw`flex justify-center`}
   font-size: 10px;
   font-weight: 600;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: 0.12px;
   color: ${Colors.darkBlueGrey};
`
export const DueDateSpan = styled.span`
   ${tw`flex justify-center`}
   font-size: 10px;
   font-weight: 600;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: 0.12px;
   color: ${Colors.darkBlueGrey};
`
