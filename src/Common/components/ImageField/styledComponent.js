import tw from 'tailwind.macro'
import styled from '@emotion/styled'

export const ImageTag = styled.img`
   ${tw``}
   width:${props => props.width};
   height:${props => props.height};
   object-fit: contain;
`
