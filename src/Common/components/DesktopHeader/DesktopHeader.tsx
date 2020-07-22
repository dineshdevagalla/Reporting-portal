import React, { Component } from 'react'

import { AdminTabSwitch } from '../../../Admin/components/AdminTabSwitch'
import { RpTabSwitch } from '../../../Rp/components/RpTabSwitch'
import { Typo24DarkBlueGreyHKGroteskMedium } from '../../styleGuide/Typos'

import { ImageField } from '../ImageField'
import { ProfileDetails } from '../ProfileDetails'

import {
   DesktopConatiner,
   ImageAndTextContainer,
   TabBarComponent,
   ProfileConatiner,
   SwitchingDetails,
   ReportingPortalText
} from './styledComponents'
const imageUrl =
   'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/4b7bbe95-15e2-4fb0-99ef-621cbbf3bc88.svg'
class DesktopHeader extends Component {
   roleType = 'ADMIN'
   render() {
      return (
         <DesktopConatiner>
            <ImageAndTextContainer>
               <ImageField imageUrl={imageUrl} width='78px' height='78px' />
               <ReportingPortalText>
                  <Typo24DarkBlueGreyHKGroteskMedium>
                     Reporting Portal
                  </Typo24DarkBlueGreyHKGroteskMedium>
               </ReportingPortalText>
            </ImageAndTextContainer>
            <SwitchingDetails>
               <TabBarComponent>
                  {this.roleType === 'ADMIN' ? <AdminTabSwitch /> : null}
                  {this.roleType === 'RP' ? <RpTabSwitch /> : null}
               </TabBarComponent>
               <ProfileConatiner>
                  <ProfileDetails />
               </ProfileConatiner>
            </SwitchingDetails>
         </DesktopConatiner>
      )
   }
}

export default DesktopHeader
