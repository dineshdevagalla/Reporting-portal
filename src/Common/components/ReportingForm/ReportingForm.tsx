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
import { observer } from 'mobx-react'
import { observable, computed } from 'mobx'

export interface ReportingFormProps {
   onClickSubmit?: any
   onChangeDescription?: (event: any) => void
   onChangeSubCategory?: (event: any) => void
   onChangeTitle?: (event: any) => void
   onChangeCatgory?: (event: any) => void
   onChangeSevrity?: (event: any) => void

   selectedCategory?: any
   categoriesList?: any
}
@observer
class ReportingForm extends Component<ReportingFormProps> {
   @observable listOfSubCategories = []

   @computed get listOfCategories() {
      const { categoriesList } = this.props
      let obj = {}
      return categoriesList.map(
         eachCategory =>
            (obj = {
               name: eachCategory.categoryName,
               label: eachCategory.categoryName,
               id: eachCategory.categoryId
            })
      )
   }
   onClickSubmitButton = () => {}
   render() {
      const { listOfCategories, listOfSubCategories } = this

      const {
         onChangeTitle,
         onChangeCatgory,
         onChangeSevrity,
         onChangeSubCategory,
         onChangeDescription,

         onClickSubmit
      } = this.props
      //console.log(this.listOfCategories, 'hii dinesh how r u')
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
               <InputElement onChange={onChangeTitle} />
            </TitleOfTheObservationText>

            <SelectCategoriesAndSubCategoriesConatiner>
               <SelecteCategoriesText>
                  <Typo12DarkBlueGreyHKGroteskSemiBold>
                     Select Categories
                  </Typo12DarkBlueGreyHKGroteskSemiBold>
                  <ReactSelect
                     placeholder={'select categorie'}
                     className={'reactSelectDefaultStyles'}
                     onChange={onChangeCatgory}
                     options={listOfCategories}
                  />
               </SelecteCategoriesText>

               <SelectSubCategoriesText>
                  <Typo12DarkBlueGreyHKGroteskSemiBold>
                     Sub Categories
                  </Typo12DarkBlueGreyHKGroteskSemiBold>
                  <ReactSelect
                     className={'reactSelectDefaultStyles'}
                     placeholder={'sub- categorie'}
                     onChange={onChangeSubCategory}
                     options={listOfSubCategories}
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
                  onChange={onChangeSevrity}
               />
            </SeverityText>
            <DescriptionText>
               <Typo12DarkBlueGreyHKGroteskSemiBold>
                  Description
               </Typo12DarkBlueGreyHKGroteskSemiBold>
               <InputElement
                  onChange={onChangeDescription}
                  className='inputElementStyles'
               />
            </DescriptionText>
            <AttachementsText>
               <Typo12DarkBlueGreyHKGroteskSemiBold>
                  Attachements
               </Typo12DarkBlueGreyHKGroteskSemiBold>
            </AttachementsText>
            <SubmitButton>
               <Button
                  onClickButton={onClickSubmit}
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
