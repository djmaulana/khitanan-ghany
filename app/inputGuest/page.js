'use client'
import Image from 'next/image';
import React, { useState } from 'react'

const Page = () => {
  const [namaTamu, setNamaTamu] = useState('');
  const [invitationLink, setInvitationLink] = useState('');

  const handleGenerateLink = () => {
    // Di sini, Anda dapat menghasilkan link dengan nama tamu
    if (namaTamu.trim() === ''){
        alert("Masukkan nama tamu")
        return
    }
    let guest = namaTamu
    guest = guest.replace(/\s+/g, '-').toLowerCase();
    const link = `https://ninda-dede-wedding-invitation.vercel.app/?guest=${guest}`;
    const mess = `
    
    Assalamualaikum Wr.Wb. \n
    Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud untuk 
    mengundang Bapak/Ibu/Saudara/i pada acara Tasyakuran Khitanan putra kami:
    \n
    Nama: Ghany Muflih Wahid
    Tanggal Acara: 13 April 2024
    Lokasi: Di rumah Ghany
    Detail Acara : ${link}\n
    Mohon doa restu dan kehadiran Bapak/Ibu/Saudara/i dalam acara ini.
    \n
    Terima kasih atas perhatiannya.
    \n
    Wassalamu'alaikum Wr. Wb.
    `
    setInvitationLink(mess);
  };
  return (
        <div className='h-screen grid place-items-center p-10'>
          <div className='text-center flex flex-col'>
          {/* <Image 
            src='/logo-neo.png'
            alt='logo neo'
            width={100}
            height={100}
            className='mx-auto mb-5'
          /> */}
            <h1 className='text-[25px] mb-5'>Generate Invitation Link</h1>
            <input
              type="text"
              placeholder="Input Nama Tamu"
              id='tamu'
              name='tamu'
              value={namaTamu}
              onChange={(e) => setNamaTamu(e.target.value)}
              className='border rounded-lg w-60 mx-auto px-2 mt-3'
              required
            />
            <button 
            onClick={handleGenerateLink} 
            className='mt-5 text-sm bg-slate-800 text-white mx-auto px-2 rounded-full py-1'>
              Generate
            </button>
            {invitationLink && (
              <p className='mt-3'>Link Undangan Anda: <br />{invitationLink}</p>
              )}
          </div>
        </div> 
  )
}

export default Page