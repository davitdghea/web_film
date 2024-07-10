import React from 'react'
import Heart from '../common/Heart'
import Button from '../common/Button'
const DetailsFilm = ({ title, status, IdYouToBe }) => {
   
    return (
        <div className='flex w-full relative  h-full max-h-[455px]  text-white'>

            {IdYouToBe ?
                <div className='w-full max-w-[1560px] h-full max-h-[455px]'>
                    <iframe width="100%" height="455" src={`https://www.youtube.com/embed/${IdYouToBe}`} frameBorder="0" allowFullScreen title=""></iframe>
                    <div className='flex flex-col z-10 absolute bottom-[53px] pl-[32px]'>
                        <p className=' text-[48px] pb-[20px]'>{status}</p>
                        <span className='z-10 flex pb-[36px] text-[14px]'> {title} </span>
                        <span className='flex'><Button title=' Watch now ' customStyle='px-[24px] py-[17px]' /> <Heart customStyle='p-[15px]' sizeIcon={24} /></span>
                    </div>
                </div>
                :
                <img className=' w-full  max-h-[455px] ' src='https://s3-alpha-sig.figma.com/img/05b3/f62d/1ed524068bf7052043a0e38fd2ff1d0a?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Plipt~cxCqOFmNyCmd-amU5QU-ISZKuQArSllaP1UniiLjHM7ouw8Jw2kF8lSd5Vb99KW0tK0HRGdmrevxAnN7z4vPPa-xqje1xkycDsi-hwk5O2mI5bDFtKmJsP2iraUkoF0nvEbfa9d~fYh3uFSILetvtWGSlBn7HlGyetlroywQh1JVS0A5DRZ1lPNOwJAlqXNhtQKotGrWCiEixmLTPnGlOvbvAPuQOzdAn3m8A7CYfBPwuqJB6SnN~dtHgmd7NNJ3nsz2UZqLIE8Hot4utNyhj3CEQay1q-5FpeoKyIrciAumOoiEASn3mXdKCeqNIkkT8TwUi1NmNLRXs4Gg__' />}

        </div>
    )
}

export default DetailsFilm