import React, { useState } from 'react'
import { Logo } from '../asset/logo'
import Button from './common/Button'
import { Phanquyen } from '../stores/phanquen'
import path from '../ultils/path'
import { Link } from 'react-router-dom'
const LoginComponents = () => {
    const [chayButton,SetChayButton]=useState(false)
    const onHClick = ()=>{
        SetChayButton(!chayButton)
    }
  return (
      <div className=' flex justify-center items-center' >
          <div className='h-[1024px] relative z-1 w-full bg-gradient-to-tl from-customPurple to-customDarkGray '>
              <div className=' absolute  w-full h-full flex '>
                  <img className='w-full h-full opacity-10' src='https://s3-alpha-sig.figma.com/img/ea3b/9482/29fe5881e0f41d63a622877ee9c233f1?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BO6pRW3JOR~Q6kMWXkKpDtB15OxUq8IjyjmTqhm5feHBBIPV-BXESFxa9feCoFFaWsIqbolYa9pmkQEgiqLrhouzvryHyQsL5RAGZgz3LFptlHvzkeynA964huibAq2MXjzh1ehae2VGk9Tj8So62O8Ww7eFSTtY6fobpmtFcF9ggdEHiywPL21R1r4-y0vxOqhonfT0LZXoX~QV63QN8WwIN~VT0V0dCYNCuTTlkhesY4faIeka0ISrxmO~S2yXy4PKLT8zjrGIqAqbID6FSLrZWbFHmGuN9iVPNK6MQB6-dVtCSqZJ5o3syaxrRbvIC-Q9vDQlYsRLeaVuOCdwAg__' alt ='' />
              </div>
          </div>
          <div  className='  text-white  flex flex-col justify-center items-center absolute'>
              <div className='flex  text-[22px] mt-[16px]'>
                  <Logo />
                  <span className='mt-1 ml-1'>WATCH</span>
              </div>
              <span className='text-[18px] font-normal leading-[20px] mb-[40px]'>Enjoy the newest movies</span>
              <div onClick={onHClick}><Button title="Log in" customStyle="px-[98px] py-[17px]" /></div>
              {chayButton && <Phanquyen/>}
              <span className='mt-[16px]'><Link to={path.PUBLIC}>Guest?</Link> <a href="#" className="text-blue-400 underline">Sign up</a></span>
          </div>
    </div>
      
  )
}

export default LoginComponents