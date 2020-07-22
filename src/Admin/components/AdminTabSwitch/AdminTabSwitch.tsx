import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next'
import {
   TabBarView,
   TotalObservationsText,
   Categories
} from './styledComponents'

interface AdminSwitchProps extends WithTranslation {}
@observer
class AdminTabSwitch extends Component<AdminSwitchProps> {
   @observable stateOfTabBar = 'totalObservations'

   onChangeTabBarSwitch = event => {
      this.stateOfTabBar = event.target.value
      this.onChangeRoute(this.stateOfTabBar)
   }
   onChangeRoute = selectedTab => {
      if (selectedTab === 'totalObservations') {
      } else {
      }
   }

   render() {
      const { t } = this.props
      return (
         <TabBarView>
            <TotalObservationsText
               onClick={this.onChangeTabBarSwitch}
               value='totalObservations'
               stateText={this.stateOfTabBar}
            >
               Total Observations
            </TotalObservationsText>

            <Categories
               onClick={this.onChangeTabBarSwitch}
               value='categories'
               stateText={this.stateOfTabBar}
            >
               Categories
            </Categories>
         </TabBarView>
      )
   }
}

export default withTranslation('', {})(AdminTabSwitch)
