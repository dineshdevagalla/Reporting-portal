import * as React from 'react'

function SvgComponent(props) {
   return (
      <svg width={6} height={11} fill='none' viewBox='0 0 6 11' {...props}>
         <path
            fill='#7E858E'
            fillRule='evenodd'
            d='M5.034 0L6 1.055 1.931 5.5 6 9.945 5.034 11 .618 6.175a1 1 0 010-1.35L5.034 0z'
            clipRule='evenodd'
         />
      </svg>
   )
}

export default SvgComponent
