'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Montserrat, Dancing_Script } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams  } from 'next/navigation';

const ds = Dancing_Script({ subsets: ['latin'], weight: ['400', '500'] });
const mq = Montserrat({ subsets: ['latin'], weight: ['400', '500'] });

const Home = () => {
  const searchParams = useSearchParams()
  let namaTamu = searchParams.get('guest')
  if (namaTamu != null){
    namaTamu = namaTamu.replace(/-/g, ' ');
  }
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useRef < HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("audio/music.mp3") : undefined
  );
  useEffect(() => {
    audio.current?.loop
  })

  const handelMusic = () => {
    if (isPlaying) {
      audio.current?.pause();
    } else {
      audio.current?.play();
    }
    setIsPlaying(!isPlaying);
  }
  return (
    <div className="container relative mx-auto p-4 text-center min-h-screen items-center justify-center" style={{backgroundImage: "url('/bg-main.jpg')", backgroundSize: "cover"}}>
      <div className='mt-5'>
        <h1 className={mq.className} style={{fontSize: "30px", fontWeight: "500"}}>Undangan</h1>
        <h2 className={ds.className} style={{fontSize: "45px", fontWeight: "500", letterSpacing: "8px", lineHeight: "1", marginTop: "5px"}}>Tasyakuran <br /> Khitanan</h2>
        <div className='mt-5'>
          <Image 
          src='/c-1.png'
          width={320}
          height={300}
          alt='img'
          className='mx-auto'
          />
        </div>
        <div className=''>
          <p className={ds.className} style={{fontSize: "20px", fontWeight: "500"}}>Ghany Muflih Wahid</p>
          <p className={mq.className} style={{fontSize: "14px", fontWeight: "400"}}>Sabtu, 13 April 2024</p>
          <hr className='w-1/2 mx-auto mt-3 border-black opacity-80'/>
          {namaTamu && (
            <>
              <p className='mt-5'>Kepada Yth.</p>
              <p className={mq.className} style={{fontSize: "14px", fontWeight: "500", marginTop: "10px"}}>{namaTamu}</p>
            </>
          )}
          <Link href={'/invitation'}>
            <div className={mq.className}>
              <button onClick={handelMusic} className='text-white text-sm animate-bounce mt-5 bg-[#ED7B7B] rounded-full px-3 py-1'>Buka Undangan</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
