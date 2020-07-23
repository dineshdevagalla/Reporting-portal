import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import BackTickIcon from '../../Icons/BackTickIcon'

import RadioButtons from '../RadioButtons'
import { ReactSelect } from '../ReactSelect'
import { InputElement } from '../InputElement'
import { CustomDatePicker } from '../CustomDatePicker'
import './index.css'
import {
   ReportedFormContainer,
   TitleTextAndBackTickContainer,
   TitleText,
   DescriptionText,
   SelectCategoriesAndSubCategoriesConatiner,
   SelecteCategoriesText,
   SelectSubCategoriesText,
   StatusContainer,
   StatusText,
   SeverityText,
   AttachementsText,
   AssignedToContainer,
   AssignedToText,
   ReportedOnConatiner,
   ReportedOnText,
   DueDateContainer,
   DueDateText,
   DueDateAndRadioButtonsConatiner,
   SubmitButton
} from './styledComponents'
import {
   Typo14SteelHKGroteskRegular,
   Typo12DarkBlueGreyHKGroteskSemiBold
} from '../../styleGuide/Typos'
import { Button } from '.././Button'
import './index.css'
//import { roleType } from '../../constants/ObservationConstans'
const roleType = 'USER'
const disabled = true
class ReportedForm extends Component {
   onChangeDatePicker = () => {}
   onClickSubmitButton = () => {}
   onChangeRadioButton = () => {}
   render() {
      return (
         <ReportedFormContainer>
            <TitleTextAndBackTickContainer>
               <BackTickIcon />
               <TitleText> Title</TitleText>
            </TitleTextAndBackTickContainer>

            <DescriptionText>
               <InputElement
                  disabled={disabled}
                  className={'inputElementStyles'}
               />
            </DescriptionText>

            <SelectCategoriesAndSubCategoriesConatiner>
               <SelecteCategoriesText>
                  <Typo12DarkBlueGreyHKGroteskSemiBold>
                     Select Categories
                  </Typo12DarkBlueGreyHKGroteskSemiBold>
                  <ReactSelect
                     placeholder={'select categorie'}
                     className={'reactSelectDefaultStyles'}
                     isDisabled={
                        roleType === 'USER'
                           ? true
                           : roleType === 'ADMIN'
                           ? false
                           : true
                     }
                  />
               </SelecteCategoriesText>

               <SelectSubCategoriesText>
                  <Typo12DarkBlueGreyHKGroteskSemiBold>
                     Sub Categories
                  </Typo12DarkBlueGreyHKGroteskSemiBold>
                  <ReactSelect
                     className={'reactSelectDefaultStyles'}
                     placeholder={'sub- categorie'}
                     isDisabled={
                        roleType === 'USER'
                           ? true
                           : roleType === 'ADMIN'
                           ? false
                           : true
                     }
                  />
               </SelectSubCategoriesText>
            </SelectCategoriesAndSubCategoriesConatiner>
            <StatusContainer>
               <StatusText>Status</StatusText>
               <ReactSelect
                  className={'reactSelectDefaultStyles'}
                  placeholder={'status'}
                  isDisabled={roleType === 'USER' ? true : false}
               />
            </StatusContainer>

            <SeverityText>
               <Typo12DarkBlueGreyHKGroteskSemiBold>
                  Severity
               </Typo12DarkBlueGreyHKGroteskSemiBold>
               <ReactSelect
                  className={'reactSelectDefaultStyles'}
                  placeholder={'select severity'}
                  isDisabled={
                     roleType === 'USER'
                        ? true
                        : roleType === 'ADMIN'
                        ? false
                        : true
                  }
               />
            </SeverityText>
            <AttachementsText>
               <Typo12DarkBlueGreyHKGroteskSemiBold></Typo12DarkBlueGreyHKGroteskSemiBold>
            </AttachementsText>

            <AssignedToContainer>
               <AssignedToText>Assigned To</AssignedToText>
               <ReactSelect
                  className={'reactSelectDefaultStyles'}
                  isDisabled={
                     roleType === 'USER'
                        ? true
                        : roleType === 'ADMIN'
                        ? false
                        : true
                  }
               />
            </AssignedToContainer>

            <ReportedOnConatiner>
               <ReportedOnText>Reported On</ReportedOnText>
               <CustomDatePicker
                  disabled={disabled}
                  onChangeDatePicker={this.onChangeDatePicker}
               />
            </ReportedOnConatiner>

            <DueDateContainer>
               <DueDateText>Due Date</DueDateText>
               <DueDateAndRadioButtonsConatiner>
                  <CustomDatePicker
                     onChangeDatePicker={this.onChangeDatePicker}
                     disabled={
                        roleType === 'USER'
                           ? true
                           : roleType === 'ADMIN'
                           ? false
                           : true
                     }
                  />
                  {roleType !== 'USER' ? <RadioButtons /> : null}
               </DueDateAndRadioButtonsConatiner>
            </DueDateContainer>

            <SubmitButton>
               <Button
                  onClickButton={this.onClickSubmitButton}
                  className={'buttonStyles'}
                  text='Submit'
                  type={Button.defaultTypes.type.filled}
                  varient={Button.defaultTypes.varient.oval}
               />
            </SubmitButton>
         </ReportedFormContainer>
      )
   }
}

export default ReportedForm
