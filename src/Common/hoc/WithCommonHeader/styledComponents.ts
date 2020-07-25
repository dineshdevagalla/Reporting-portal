import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Colors } from '../../themes/Colors'
const DesktopLayout = styled.div`${tw``}
border:1px solid ${Colors.lightBlueGrey};
margin:100px;
background-color:${Colors.whiteTwo};`

const DesktopInnerLayout = styled.div`
   ${tw``}
   padding:20px;
`

const ReportingDesktopLayout = styled.div`
   ${tw``}
   margin:50px;
   border: 1px solid ${Colors.lightBlueGrey};
   background-color: ${Colors.white};
`
export { DesktopLayout, DesktopInnerLayout, ReportingDesktopLayout }
