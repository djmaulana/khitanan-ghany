import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen mt-5'>
        <div className='p-5 bg-black bg-opacity-90 h-4/5 text-center text-gray-400'>
            {/* <Image
                src='/pp.jpg'
                alt='img'
                width={150}
                height={50}
                className='mx-auto rounded-full mt-5'  
            /> */}
            <hr className='border-1 border-gray-400 w-1/3 mx-auto mt-5'/>
            <p className='text-sm mt-3 mx-8'>It is an honor and happiness for us, if you are willing to attend and give your blessing. For your presence and blessings, we thank you.</p>
            <div className=''>
                <h1 className='text-3xl mt-10' data-aos='fade-up'>
                    Ninda Aliyanda <br />
                    & <br />
                    Dede Saepul Dina
                </h1>
            </div>
            <p className='text-[10px] mt-20'>Made with ♥ by djmaulana</p>
            {/* <Footer /> */}
        </div>
    </div>
  )
}

export default Footer