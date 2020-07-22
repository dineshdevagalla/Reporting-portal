import React, { Component } from 'react'

import { FilterConstants } from '../../constants/FilterConstants'
import {
   Typo14SteelHKGroteskRegular,
   Typo12DarkBlueGreyHKGroteskSemiBold
} from '../../styleGuide/Typos'

import './index.css'
import {
   FilterContainer,
   FilterAndTextWrapper,
   Dropdown,
   DropdownContent,
   DropdownItem,
   FilterText
} from './styledComponents'

import FilterIcon from '../../Icons/FilterIcon'
class FilterComponent extends Component {
   onClickDropdownItem = () => {}

   ListOfItems = () => {
      return FilterConstants.map(eachItem => {
         return (
            <DropdownItem onClick={this.onClickDropdownItem} value={eachItem}>
               <Typo14SteelHKGroteskRegular>
                  {eachItem}
               </Typo14SteelHKGroteskRegular>
            </DropdownItem>
         )
      })
   }

   render() {
      return (
         <FilterContainer>
            <Dropdown className={'dropdown'}>
               <FilterAndTextWrapper>
                  <FilterIcon />
                  <Typo12DarkBlueGreyHKGroteskSemiBold>
                     <FilterText>Filter</FilterText>
                  </Typo12DarkBlueGreyHKGroteskSemiBold>
               </FilterAndTextWrapper>
               <DropdownContent className={'dropdown-content'}>
                  {this.ListOfItems()}
               </DropdownContent>
            </Dropdown>
         </FilterContainer>
      )
   }
}

export default FilterComponent
