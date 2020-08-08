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
import { SelectSeverityConstants } from '../../constants/selectOptionsConstants'
import { ToastContainer } from 'react-toastify'
import Loader from 'react-loader-spinner'
import { API_FETCHING } from '@ib/api-constants'
export interface ReportingFormProps {
   onClickSubmit?: any
   onChangeDescription?: (event: any) => void
   onChangeSubCategory?: (event: any) => void
   onChangeTitle?: (event: any) => void
   onChangeCatgory?: (event: any) => void
   onChangeSevrity?: (event: any) => void
   onClickBackToObservation?: () => void
   getPostUserObservationAPIStatus?: number
   selectedCategory?: any
   categoriesList?: any
   listOfSubCategories?: any
   createRef?: any
   severity?: any
   categoryName?: any
   subCategoryName?: any
   title?: any
   description?: any
}
@observer
class ReportingForm extends Component<ReportingFormProps> {
   @observable createRef = React.createRef()
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
      const { listOfCategories } = this

      const {
         onChangeTitle,
         onChangeCatgory,
         onChangeSevrity,
         onChangeSubCategory,
         onChangeDescription,
         onClickBackToObservation,
         getPostUserObservationAPIStatus,
         createRef,

         onClickSubmit,
         title,
         categoryName,
         subCategoryName,
         description
      } = this.props

      return (
         <ReportingFormContainer>
            <ToastContainer
               hideProgressBar={true}
               autoClose={3000}
               closeButton={false}
               position='top-center'
            />
            <BackToObservationText onClick={onClickBackToObservation}>
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
               <InputElement value={title} onChange={onChangeTitle} />
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
                     value={categoryName}
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
                     options={this.props.listOfSubCategories}
                     reference={createRef}
                     value={subCategoryName}
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
                  options={SelectSeverityConstants}
                  value={this.props.severity}
               />
            </SeverityText>
            <DescriptionText>
               <Typo12DarkBlueGreyHKGroteskSemiBold>
                  Description
               </Typo12DarkBlueGreyHKGroteskSemiBold>
               <InputElement
                  onChange={onChangeDescription}
                  className='inputElementStyles'
                  value={description}
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
                  text={
                     getPostUserObservationAPIStatus === API_FETCHING ? (
                        <Loader
                           type='Circles'
                           color='#00BFFF'
                           height={35}
                           width={35}
                        />
                     ) : (
                        'Submit'
                     )
                  }
                  type={Button.defaultTypes.type.filled}
                  varient={Button.defaultTypes.varient.oval}
               />
            </SubmitButton>
         </ReportingFormContainer>
      )
   }
}

export default ReportingForm
