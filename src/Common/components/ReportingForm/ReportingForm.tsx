import React, { Component } from 'react'
import { ReactSelect } from '../ReactSelect'
import { InputElement } from '../InputElement'
import BackTickIcon from '../../Icons/BackTickIcon'
import './index.css'
import {
   BackToObservationText,
   ReportingFormContainer,
   TitleOfTheObservationText,
   SelectCategoriesAndSubCategoriesConatiner,
   SelecteCategoriesText,
   SelectSubCategoriesText,
   SeverityText,
   DescriptionText,
   AttachementsText,
   SubmitButton
} from './styledComponents'
import {
   Typo14SteelHKGroteskRegular,
   Typo12DarkBlueGreyHKGroteskSemiBold
} from '../../styleGuide/Typos'
import { Button } from '.././Button'
class ReportingForm extends Component {
   onClickSubmitButton = () => {}
   render() {
      return (
         <ReportingFormContainer>
            <BackToObservationText>
               <BackTickIcon />
               <Typo14SteelHKGroteskRegular>
                  {' '}
                  Back to Observations
               </Typo14SteelHKGroteskRegular>
            </BackToObservationText>

            <TitleOfTheObservationText>
               <Typo12DarkBlueGreyHKGroteskSemiBold>
                  Title Of the Observation
               </Typo12DarkBlueGreyHKGroteskSemiBold>
               <InputElement />
            </TitleOfTheObservationText>

            <SelectCategoriesAndSubCategoriesConatiner>
               <SelecteCategoriesText>
                  <Typo12DarkBlueGreyHKGroteskSemiBold>
                     Select Categories
                  </Typo12DarkBlueGreyHKGroteskSemiBold>
                  <ReactSelect
                     placeholder={'select categorie'}
                     className={'reactSelectDefaultStyles'}
                  />
               </SelecteCategoriesText>

               <SelectSubCategoriesText>
                  <Typo12DarkBlueGreyHKGroteskSemiBold>
                     Sub Categories
                  </Typo12DarkBlueGreyHKGroteskSemiBold>
                  <ReactSelect
                     className={'reactSelectDefaultStyles'}
                     placeholder={'sub- categorie'}
                  />
               </SelectSubCategoriesText>
            </SelectCategoriesAndSubCategoriesConatiner>
            <SeverityText>
               <Typo12DarkBlueGreyHKGroteskSemiBold>
                  Severity
               </Typo12DarkBlueGreyHKGroteskSemiBold>
               <ReactSelect
                  className={'reactSelectDefaultStyles'}
                  placeholder={'select severity'}
               />
            </SeverityText>
            <DescriptionText>
               <Typo12DarkBlueGreyHKGroteskSemiBold>
                  Description
               </Typo12DarkBlueGreyHKGroteskSemiBold>
               <InputElement className='inputElementStyles' />
            </DescriptionText>
            <AttachementsText>
               <Typo12DarkBlueGreyHKGroteskSemiBold>
                  Attachements
               </Typo12DarkBlueGreyHKGroteskSemiBold>
            </AttachementsText>
            <SubmitButton>
               <Button
                  onClickButton={this.onClickSubmitButton}
                  className={'buttonStyles'}
                  text='Submit'
                  type={Button.defaultTypes.type.filled}
                  varient={Button.defaultTypes.varient.oval}
               />
            </SubmitButton>
         </ReportingFormContainer>
      )
   }
}

export default ReportingForm
