import React from 'react'
import DesktopHeader from '../../components/DesktopHeader/DesktopHeader'
import { EachObservationRow } from '../../components/EachObservationRow'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { DesktopLayout } from './styledComponents'
import { Typo14WhiteHKGroteskSemiBold } from '../../styleGuide/Typos'
import { observable, computed } from 'mobx'
import { goToAddNewObservation } from '../../../Common/utils/navigationUtils'
import { USER_CREATE_OBSERVATION } from '../../../User/constants/NavigationConstants/navigationConstants'
import { inject } from 'mobx-react'
export interface HocProps {
   onClickSortingAction?: () => void
   onClickChangePageinPagination?: () => void
   onClickFilter?: () => void
   onClickAdminNavSwitch?: () => void
   onClickRpNavSwitch?: () => void
   onClickAddNewObservation?: () => void
   onClickEachObservation?: () => void
}
import CommonStore from '../../../Common/stores/CommonStore'
import { API_SUCCESS } from '@ib/api-constants'
interface InjectedProps extends RouteComponentProps {
   commonStore: CommonStore
}
function WithCommonHeader<T>(WrappedComponent: React.ComponentType<T>) {
   @inject('commonStore')
   class EnchancedComponent extends React.Component<RouteComponentProps, T> {
      componentDidMount() {
         this.getCategories()
      }

      getCategories = () => {
         const commonStore = this.getCommonStore()

         if (commonStore.getCategoriesAPIStatus !== API_SUCCESS) {
            commonStore.getCategories()
         }
      }

      onClickSortingAction = () => {}

      onClickChangePageinPagination = () => {}

      onClickFilter = () => {}

      onClickAdminNavSwitch = () => {}

      onClickRpNavSwitch = () => {}

      onClickAddNewObservation = () => {
         goToAddNewObservation(this.props.history)
      }

      onClickEachObservation = () => {}

      getInjectedProps = (): InjectedProps => this.props as InjectedProps

      getCommonStore = () => {
         return this.getInjectedProps().commonStore
      }

      render() {
         const props = this.props as T
         return (
            <DesktopLayout>
               <DesktopHeader />

               <WrappedComponent
                  onClickSortingAction={this.onClickSortingAction}
                  onClickChangePageinPagination={
                     this.onClickChangePageinPagination
                  }
                  onClickFilter={this.onClickFilter}
                  onClickAdminNavSwitch={this.onClickAdminNavSwitch}
                  onClickRpNavSwitch={this.onClickRpNavSwitch}
                  onClickAddNewObservation={this.onClickAddNewObservation}
                  onClickEachObservation={this.onClickEachObservation}
                  {...props}
               />
            </DesktopLayout>
         )
      }
   }
   return EnchancedComponent
}

export { WithCommonHeader }
