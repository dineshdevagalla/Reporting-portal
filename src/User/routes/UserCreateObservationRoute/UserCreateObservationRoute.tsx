import React, { Component } from 'react'
import { ReportingDesktopLayout } from './styledComponents'
import { inject, observer } from 'mobx-react'
import ReportingForm from '../../../Common/components/ReportingForm'
import { HocProps } from '../../../Common/hoc/WithCommonHeader/WithCommonHeader'
import WithCommonHeader from '../../../Common/hoc/WithCommonHeader'
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure/LoadingWrapperWithFailure'
import CommonStore from '../../../Common/stores/CommonStore'
import { API_SUCCESS } from '@ib/api-constants'
import { observable, action, computed } from 'mobx'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { goToBackToObservations } from '../../../Common/utils/navigationUtils'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
interface CreateObservationRouteProps extends HocProps {}
interface InjectedProps extends CreateObservationRouteProps {
   commonStore: CommonStore
}
inject('commonStore')
@observer
class UserCreateObservationRoute extends Component<
   CreateObservationRouteProps
> {
   @observable createRef = React.createRef()
   @observable title
   @observable categoryId
   @observable selectedSubCategoryId
   @observable selectedCategory
   @observable description
   @observable severity
   @observable listOfSubCategories = []
   @observable clearingSubCategory = false
   @observable categoryName = ''
   @observable subCategoryName = ''

   constructor(props) {
      super(props)
   }
   onChangeTitle = event => {
      this.title = event.target.value
   }

   onChangeCatgory = event => {
      this.subCategoryName = ''
      const { categoriesList } = this.getCommonStore()
      this.categoryName = event.value
      this.categoryId = event.id
      let x = categoriesList.find(
         eachCategory => eachCategory.categoryId == event.id
      )
      this.listOfSubCategories = x.subCategories.map(eachSubCategory => ({
         name: eachSubCategory.subCategoryName,
         label: eachSubCategory.subCategoryName
      }))
   }
   @action.bound
   clearVariables() {
      this.title = ''
      this.categoryId = ''
      this.selectedSubCategoryId = ''
      this.severity = ''
      this.description = ''
      this.categoryName = ''
      this.subCategoryName = ''
   }
   onChangeSubCategory = event => {
      this.selectedSubCategoryId = event.Id
      this.subCategoryName = event.value
   }

   onChangeSevrity = event => {
      this.severity = event.name
   }

   onChangeDescription = event => {
      this.description = event.target.value
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getCommonStore = () => {
      return this.getInjectedProps().commonStore
   }

   onClickSubmit = async () => {
      const createObservationObject = {
         title: this.title,
         category_id: this.categoryId,
         sub_category_Id: this.selectedSubCategoryId,
         severity: this.severity,
         description: this.description
      }

      await this.getCommonStore().postObservation(createObservationObject)

      if (
         this.getCommonStore().getPostUserObservationAPIStatus === API_SUCCESS
      ) {
         toast.info('observation created')

         this.clearVariables()
      }
   }

   onClickBackToObservation = () => {
      const { history } = this.props
      goToBackToObservations(history)
   }

   render() {
      const {
         onChangeTitle,
         onChangeCatgory,
         onChangeSevrity,
         onChangeSubCategory,
         onChangeDescription,
         onClickSubmit,
         listOfSubCategories
      } = this

      const {
         categoriesList,
         getPostUserObservationAPIStatus
      } = this.getCommonStore()
      return (
         <ReportingDesktopLayout>
            <ReportingForm
               onClickSubmit={onClickSubmit}
               onChangeDescription={onChangeDescription}
               onChangeSubCategory={onChangeSubCategory}
               onChangeTitle={onChangeTitle}
               onChangeCatgory={onChangeCatgory}
               onChangeSevrity={onChangeSevrity}
               selectedCategory={this.selectedCategory}
               categoriesList={categoriesList}
               listOfSubCategories={listOfSubCategories}
               createRef={this.createRef}
               onClickBackToObservation={this.onClickBackToObservation}
               severity={this.severity}
               categoryName={this.categoryName}
               subCategoryName={this.subCategoryName}
               title={this.title}
               description={this.description}
               getPostUserObservationAPIStatus={getPostUserObservationAPIStatus}
            />
         </ReportingDesktopLayout>
      )
   }
}

export default withRouter(WithCommonHeader(UserCreateObservationRoute))
