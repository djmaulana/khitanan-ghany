'use client'

import React from 'react'
import { Dancing_Script, Montserrat } from 'next/font/google'
import Image from 'next/image';
import Countdown from '../../components/Countdown';
import Slides from '../../components/Slides';


const ds = Dancing_Script({ subsets: ['latin'], weight: '400' });
const mq = Montserrat({ subsets: ['latin'], weight: ['400', '500'] });
const images = [
  '/pp.jpg',
  '/p1.jpg',
  '/p2.jpg',
  '/p3.jpg',
  '/p4.jpg',
  '/p5.jpg',
  '/p6.jpg',
]

const Page = () => { 
  
  const handleClick = () => {
    alert("Pesan terkirim")
  }
  return (
    <div className="container relative mx-auto text-center min-h-screen items-center justify-center" style={{backgroundImage: "url('/bg-main.jpg')", backgroundSize: "cover"}}>
      <div className='mt-5 p-4 '>
        <h2 className={ds.className} style={{fontSize: "45px", fontWeight: "500", letterSpacing: "8px", lineHeight: "1", marginTop: "5px"}}>Tasyakuran <br /> Khitanan</h2>
        <p className='mt-10 text-[16px] font-medium'>Assalamualaikum Wr. Wb.</p>
        <p className='text-sm leading-tight text-[12px]'>Dengan memohon rasa hormat, Kami bermaksud 
          mengundang Bapak/Ibu/Saudara/i untuk 
          menghadiri acara tasyakuran khitanan putra kami   : 
        </p>
        
        <div className='mt-5'>
          <p className={ds.className} style={{fontSize: "20px", fontWeight: "500"}}>Ghany Muflih Wahid</p>
          <p className={mq.className} style={{fontSize: "12px", fontWeight: "400"}}>Sabtu, 13 April 2024</p>
          <hr className='w-1/2 mx-auto mt-3 border-black opacity-50'/>
          <Countdown />
        </div>
        <div className='mt-5'>
          <Image 
          src='/c-2.png'
          width={320}
          height={300}
          alt='img'
          className='mx-auto'
          />
        </div>
        <p className='text-sm'>
          Putra Bapak Aceng Abdul Wahid
          <br /> &
          <br /> Ibu Maya Sari
        </p>
      </div>
      <div className='mt-10'>
        <div className={ds.className}>
          <h1 className='text-3xl '>Doa Kami</h1>
        </div>
          <p className='text-[12px] mt-2 p-4'>
          Ya Allah, kami memohon kepada-Mu agar memberkahi anak-anak kami dengan kebaikan, 
          sehingga mereka menjadi anak yang beriman, penuh taqwa, serta selalu mengamalkan 
          Al-Quran dan sunnah.
          </p>
          <p className='text-[10px] mt-2'>Ayah & Ibu</p>
      </div>
      <div className='mt-7 p-5'>
        <div className={ds.className}>
          <h1 className='text-3xl'>
            Acara
          </h1>
          <div className='w-full bg-[#6E7070] shadow-slate-700 shadow-2xl rounded-lg mt-5 p-5 text-[#dddddd]'>
            <h1 className='text-[22px]'>Hari & Tempat</h1>
            <hr className='w-1/2 mx-auto mt-3 border-[#dddddd] opacity-50'/>
            <p className={mq.className} style={{fontSize: "12px", marginTop: "12px"}}>
              Sabtu, 13 April 2024 - Selesai
            </p>
            <p className='mt-5 text-[20px]'>Rumah Ghany</p>
            <p className={mq.className} style={{fontSize: "10px", marginTop: "12px"}}>
              Dusun Cipedang Rt 006 Rw 15 Desa Sukamulya Kecamatan Baregbeg Kabupaten Ciamis
            </p>
            <h1 className='mt-5 text-[22px]'>Hiburan</h1>
            <hr className='w-1/2 mx-auto mt-2 border-[#dddddd] opacity-50'/>
            <p className={mq.className} style={{marginTop: "12px", fontSize: "14px"}}>Ade Astrid <br /> feat <br /> Gerengseng Team</p>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <div className={ds.className}>
          <h1 className='text-3xl'>Galeri Ghany</h1>
        </div>
        <div className='mt-5'>
          <Slides images={images}/>
        </div>
      </div>
      <div className='mt-10 p-5'>
        <div className={ds.className}>
          <h1 className='text-3xl'>Ucapan untuk Ghany</h1>
        </div>
        <div className='w-full shadow-slate-700 shadow-2xl h-60 bg-[#6E7070] rounded-lg mt-5 p-5 text-[#ddd]'>
          <h2 className={ds.className} style={{fontSize: "20px" }}>Form Pesan</h2>
          <div className='flex flex-col text-sm mt-5'>
            <div className='flex flex-row'>
              <label className='text-left'>Nama</label>
              <input type="text" className='text-black p-1 ml-5 w-4/5 bg-[#ddd] rounded-md'/>
            </div>
            <div className='flex flex-row mt-2'>
              <label htmlFor="" className='text-left'>Pesan</label>
              <textarea name="" className='text-black w-4/5 p-1 rounded-md ml-5 bg-[#ddd]'></textarea>
            </div>
          </div>
          <button onClick={handleClick} className='text-white text-sm mt-5 bg-[#ED7B7B] rounded-full px-3 py-1'>Submit</button>
          <hr className='mx-auto w-1/2 mt-5 opacity-50' />
          <div >
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <div className={ds.className}>
          <h1 className='text-3xl'>Lokasi</h1>
        </div>
        <div className='mt-5'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1176.6775027166204!2d108.32968581216363!3d-7.257272984988239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTUnMjcuNiJTIDEwOMKwMTknNDcuNyJF!5e0!3m2!1sid!2sid!4v1710997770809!5m2!1sid!2sid" width="350" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" className='mx-auto shadow-2xl shadow-slate-700' referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className='w-screen mt-20'>
        <div className='p-5 bg-black bg-opacity-90 h-4/5 text-center text-gray-400'>
            <Image
                src='/p7.jpg'
                alt='img'
                width={150}
                height={50}
                className='mx-auto rounded-full mt-5'  
            />
            <hr className='border-1 border-gray-400 w-1/3 mx-auto mt-5'/>
            <p className='text-sm mt-3 mx-8'>Suatu kehormatan dan kebahagiaan bagi kami, apabila bapak ibu bersedia hadir dan memberikan restunya. Atas kehadiran dan berkahnya kami ucapkan terima kasih.</p>
            <div className={ds.className}>
                <h1 className='text-3xl mt-10'>
                    Ghany Muflih Wahid
                </h1>
            </div>
            <p className='text-[10px] mt-20'>Made with <span className='animate-pulse'>❤</span> by djmaulana</p>
            {/* <Footer /> */}
        </div>
    </div>

      {/* <Footer /> */}
    </div>
  )
}

export default Page