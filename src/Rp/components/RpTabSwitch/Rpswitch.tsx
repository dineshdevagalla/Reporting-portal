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
      this.stateOfTabBar = event.targte.value
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
            <div>{t('rp:addTodo')}</div>
            <AssignedToMeText
               onClick={this.onChangeTabBarSwitch}
               value={this.stateOfTabBar}
            >
               {t('rp:addTodo')}
            </AssignedToMeText>

            <MyObservationsText
               onClick={this.onChangeTabBarSwitch}
               value={this.stateOfTabBar}
            >
               {t('rp:addTodo')}
            </MyObservationsText>
         </TabBarView>
      )
   }
}

export default withTranslation('', {})(RpTabswitch)
