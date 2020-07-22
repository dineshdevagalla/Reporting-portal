import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const FilterIcon = styled.img`
   ${tw`ml-2`};
   width: 16px;
   height: 16px;
   object-fit: contain;
`

const FilterContainer = styled.div`
   ${tw`flex justify-between mt-4 mb-4`}
`

const Dropdown = styled.div`
   ${tw``}
`

const Container = styled.div`
   ${tw`flex items-center justify-center`};
   width: 200px;
`

const DropdownContent = styled.div`
   ${tw``};
   cursor: pointer;
   background-color: #f9f9f9;
   padding: 12px 16px;
`

const DropdownItem = styled.button`
   ${tw`hover:bg-gray-200 p-1 flex flex-col`}
`
const FilterText = styled.p`
   ${tw``}
   margin-left:5px;
`
const FilterAndTextWrapper = styled.div`
   ${tw`flex`}
`
export {
   FilterText,
   FilterContainer,
   Container,
   Dropdown,
   DropdownContent,
   DropdownItem,
   FilterAndTextWrapper
}
