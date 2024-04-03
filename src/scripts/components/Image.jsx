import React from 'react'
import signup240 from '../../images/low-dpi/signup-240.png'
import signup480 from '../../images/low-dpi/signup-480.png'
import signup640 from '../../images/low-dpi/signup-640.png'
import signup800 from '../../images/low-dpi/signup-800.png'
import signup1080 from '../../images/low-dpi/signup-1080.png'
import signup1280 from '../../images/low-dpi/signup-1280.png'
import signup1366 from '../../images/low-dpi/signup-high-1366.png'

import signup240HighRes from '../../images/high-dpi/signup-240.png'
import signup480HighRes from '../../images/high-dpi/signup-480.png'
import signup640HighRes from '../../images/high-dpi/signup-640.png'
import signup800HighRes from '../../images/high-dpi/signup-800.png'
import signup1080HighRes from '../../images/high-dpi/signup-1080.png'
import signup1280HighRes from '../../images/high-dpi/signup-1280.png'
import signup1366HighRes from '../../images/high-dpi/signup-high-1366.png'

export default () => {
    return <picture>
        <source srcSet={`${signup1366} 1280w, ${signup1366HighRes} 2560w`} media='(min-width: 1366px)'/>
        <source srcSet={`${signup1280} 1280w, ${signup1280HighRes} 2560w`} media='(min-width: 1280px)'/>
        <source srcSet={`${signup1080} 1080w, ${signup1080HighRes} 2160w`} media='(min-width: 1080px)'/>
        <source srcSet={`${signup800} 800w, ${signup800HighRes} 1600w`} media='(min-width: 800px)'/>
        <source srcSet={`${signup640} 640w, ${signup640HighRes} 1280w`} media='(min-width: 640px)'/>
        <source srcSet={`${signup480} 480w, ${signup480HighRes} 960w`} media='(min-width: 480px)'/>
        <img srcSet={`${signup240} 240w, ${signup240HighRes} 480w`} alt='signup image'/>
      </picture>
}