import React from 'react'
// import Heart from '../common/Heart'
import Button from '../common/Button'
const DetailsFilm = ({ title, status, IdYouToBe, heart, idFilm }) => {
   
    return (
        <div className='flex w-full relative  h-full max-h-[410px]  text-white border border-gray-100 rounded-md'>

            {IdYouToBe ?
                <div className='w-full max-w-[1560px] h-full'>
                    <iframe width="100%"  className="sm:h-[200px] md:h-[350px] lg:h-[410px] "  src={`https://www.youtube.com/embed/${IdYouToBe}`} frameBorder="0" allowFullScreen title="YouTube video player">
                    </iframe>
                    <div className='flex   max-lg:w-full py-1 bottom-[-50px]  lg:flex-col z-8 absolute lg:bottom-[53px] lg:pl-[32px]  max-sm:bg-gray-500 lg:bg-none lg:bg-opacity-100  pl-[10px]'>
                        <p className='flex flex-col mr-5'>
                        <span className=' lg:text-[48px] text-[14px] lg:pb-[20px]'>{status}</span>
                        <span className='z-8 flex lg:pb-[36px] text-[14px]'> {title} </span>
                        </p>
                        <span className='flex'>
                            <Button title=' Watch now ' customStyle='lg:px-[24px] lg:py-[17px] px-[20px] py-[10px]' /> 
                            {/*<Heart heart={heart} idFilm={idFilm} customStyle='p-[15px]' sizeIcon={24} />*/}
                        </span>
                    </div>
                </div>
                :
                <img className='w-full  max-h-[410px] ' src='https://s3-alpha-sig.figma.com/img/05b3/f62d/1ed524068bf7052043a0e38fd2ff1d0a?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Plipt~cxCqOFmNyCmd-amU5QU-ISZKuQArSllaP1UniiLjHM7ouw8Jw2kF8lSd5Vb99KW0tK0HRGdmrevxAnN7z4vPPa-xqje1xkycDsi-hwk5O2mI5bDFtKmJsP2iraUkoF0nvEbfa9d~fYh3uFSILetvtWGSlBn7HlGyetlroywQh1JVS0A5DRZ1lPNOwJAlqXNhtQKotGrWCiEixmLTPnGlOvbvAPuQOzdAn3m8A7CYfBPwuqJB6SnN~dtHgmd7NNJ3nsz2UZqLIE8Hot4utNyhj3CEQay1q-5FpeoKyIrciAumOoiEASn3mXdKCeqNIkkT8TwUi1NmNLRXs4Gg__' />}

        </div>
    )
}

export default DetailsFilm