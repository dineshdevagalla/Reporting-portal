import React, { Component } from 'react'
import { Typo18DarkBlueGrayHKGroteskMedium } from '../../styleGuide/Typos'

import { ProfileDetailsContainer, ProfileNameText } from './styledComponents'
import { ImageField } from '../ImageField'

const imageUrl =
   'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/0e8f2ce7-e29c-40a2-a34d-9a005c7334d6@3x.png'
class ProfileDetails extends Component {
   render() {
      return (
         <ProfileDetailsContainer>
            <ProfileNameText>
               <Typo18DarkBlueGrayHKGroteskMedium>
                  {' '}
                  Dinesh
               </Typo18DarkBlueGrayHKGroteskMedium>
            </ProfileNameText>
            <ImageField imageUrl={imageUrl} width='48px' height='48px' />
         </ProfileDetailsContainer>
      )
   }
}

export default ProfileDetails
