import React from 'react'
import { ImageTag } from './styledComponent.js'
export class ImageField extends React.Component {
   render() {
      const { imageUrl, width, height } = this.props
      return <ImageTag src={imageUrl} width={width} height={height} />
   }
}
