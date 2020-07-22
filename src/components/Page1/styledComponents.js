import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Colors } from '../../Common/themes/Colors'
const DesktopLayout = styled.div`${tw``}
border:1px solid ${Colors.lightBlueGrey};
margin:100px;
background-color:${Colors.whiteTwo};`
const DesktopInnerLayout = styled.div`
   ${tw``}
   padding:20px;
`
export { DesktopLayout, DesktopInnerLayout }
