import React, { useEffect, useState } from 'react'

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const target = new Date("04/13/2024 09:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d && h && m && s < 0){
        setDays(0)
        setHours(0)
        setMinutes(0)
        setSeconds(0)
      }

    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='text-[15px] font-medium mt-5'>
        {days} Hari : {hours} Jam : {minutes} Mnt : {seconds} Dtk
    </div>
  )
}

export default Countdown