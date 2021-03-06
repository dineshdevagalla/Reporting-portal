import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next'
import {
   TabBarView,
   AssignedToMeText,
   MyObservationsText
} from './styledComponents'

interface RpSwitchProps extends WithTranslation {}
@observer
class RpTabswitch extends Component<RpSwitchProps> {
   @observable stateOfTabBar = 'assignedToMe'

   onChangeTabBarSwitch = event => {
      this.stateOfTabBar = event.target.value
      this.onChangeRoute(this.stateOfTabBar)
   }
   onChangeRoute = selectedTab => {
      if (selectedTab === 'assignedToMe') {
      } else {
      }
   }

   render() {
      const { t } = this.props
      return (
         <TabBarView>
            <AssignedToMeText
               onClick={this.onChangeTabBarSwitch}
               value='assignedToMe'
               stateText={this.stateOfTabBar}
            >
               Assigned To Me
            </AssignedToMeText>

            <MyObservationsText
               onClick={this.onChangeTabBarSwitch}
               value='myObservations'
               stateText={this.stateOfTabBar}
            >
               My Observations
            </MyObservationsText>
         </TabBarView>
      )
   }
}

export default withTranslation('', {})(RpTabswitch)
