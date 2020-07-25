import React from 'react'
import DesktopHeader from '../../components/DesktopHeader/DesktopHeader'
import { EachObservationRow } from '../../components/EachObservationRow'
import { RouteComponentProps } from 'react-router-dom'
import { DesktopLayout } from './styledComponents'
import { Typo14WhiteHKGroteskSemiBold } from '../../styleGuide/Typos'
import { observable, computed } from 'mobx'

export interface HocProps {
   onClickSortingAction?: () => void
   onClickChangePageinPagination?: () => void
   onClickFilter?: () => void
   onClickAdminNavSwitch?: () => void
   onClickRpNavSwitch?: () => void
   onClickAddNewObservation?: () => void
   onClickEachObservation?: () => void
}

function WithCommonHeader<T>(WrappedComponent: React.ComponentType<T>) {
   return class EnchancedComponent extends React.Component<
      RouteComponentProps,
      T
   > {
      onClickSortingAction = () => {}
      onClickChangePageinPagination = () => {}
      onClickFilter = () => {}
      onClickAdminNavSwitch = () => {}
      onClickRpNavSwitch = () => {}
      onClickAddNewObservation = () => {}
      onClickEachObservation = () => {}

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
}

export default WithCommonHeader
