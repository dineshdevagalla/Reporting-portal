import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Colors } from '../../themes/Colors'
export const SeverityDiv = styled.span`${tw` flex justify-center items-center `}
background-color:${props =>
   props.color === 'HIGH'
      ? Colors.neonRed
      : props.color === 'LOW'
      ? Colors.greenishTeal
      : Colors.yellowOrange};
padding:2px;
border-radius:5px;


`

export const StatusDiv = styled.span`
   ${tw` flex justify-center items-center `}
   border: 1px solid #171f46;
   border-radius: 3px;
   padding: 1px;
   font-size: 8px;
   font-weight: 600;
   font-stretch: normal;
   font-style: normal;
   line-height: 2;
   letter-spacing: 0.32px;
   color: #171f46;
`
