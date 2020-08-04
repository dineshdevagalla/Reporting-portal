import React, { Component } from 'react'
import WithCommonHeader from '../../../Common/hoc/WithCommonHeader'
import { CommonObservationLayout } from '../../../Common/components/CommonObservationsLayout'
import { inject, observer } from 'mobx-react'
import { API_SUCCESS } from '@ib/api-constants'
import { observable } from 'mobx'
import UserStore from '../../stores/UserStore'
import { HocProps } from '../../../Common/hoc/WithCommonHeader/WithCommonHeader'
import { withRouter } from 'react-router-dom'
interface UserRouteProps extends HocProps {}
interface InjectedProps extends UserRouteProps {
   userStore: UserStore
}

@inject('userStore')
@observer
class UsersObservationsRoute extends Component<UserRouteProps> {
   constructor(props) {
      super(props)
   }
   componentDidMount() {
      this.getObservations()
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps
   getUserStore = () => {
      return this.getInjectedProps().userStore
   }

   getObservations = () => {
      const userPaginationStore = this.getUserStore().userPaginationStore
      if (userPaginationStore.getObservationListAPIStatus !== API_SUCCESS) {
         this.getUserStore().userPaginationStore.getObservationsList()
      }
   }

   onClickRetry = () => {
      this.getObservations()
   }
   render() {
      const { onClickAddNewObservation } = this.props
      const {
         onCurrentPageChanges,
         onClickSelectFilter,
         onClickSortField,
         observations,
         getObservationListAPIStatus,
         setObservationsListAPIError
      } = this.getUserStore().userPaginationStore
      console.log(getObservationListAPIStatus, setObservationsListAPIError)
      const { onClickEachObservation } = this.getUserStore()
      return (
         <CommonObservationLayout
            onClickAddNewObservation={onClickAddNewObservation}
            onClickSelectFilter={onClickSelectFilter}
            onClickSortField={onClickSortField}
            onCurrentPageChanges={onCurrentPageChanges}
            onClickEachObservation={onClickEachObservation}
            listOfObservations={observations}
            observationsListAPIStatus={getObservationListAPIStatus}
            observationsListAPIError={setObservationsListAPIError}
            onClickRetry={this.onClickRetry}
         />
      )
   }
}

export default withRouter(WithCommonHeader(UsersObservationsRoute))
