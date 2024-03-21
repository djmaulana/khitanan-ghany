import React, { useEffect } from 'react'
import { Dancing_Script } from 'next/font/google'

const alex = Dancing_Script({weight:'400', preload: false, subsets: ['latin']})

const Message = () => {
    
  return (
    <div className=''>
        <div className={alex.className}>
        </div>
            <div className=' opacity-9 rounded-[15px]' >
                <h1 className=' mb-3 text-[20px]' >Message Form</h1>
                <div className='felx-row flex'>
                    <p className=' text-md mr-9' >Name</p>
                    <input type="text" className='rounded-[5px] px-2'/>
                </div>
                <div className='felx-row flex mt-2'>
                    <p className=' text-md mr-5' >Message</p>
                    <input type="text" className='rounded-[5px] px-2 py-4'/>
                </div>
                <button type='button' className='text-black font-normal hover:bg-gray-300 text-md mt-5 bg-white rounded-full px-3 py-1'>Submit</button>
            </div>
        </div>
  )
}

export default Message