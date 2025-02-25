import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState({
    hours: 2,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-green-900/80 p-4 rounded-lg inline-block">
      <p className="text-white text-sm mb-2">Limited Time Offer Ends In:</p>
      <div className="flex space-x-4">
        <div className="text-center">
          <span className="text-3xl font-bold text-white">{String(time.hours).padStart(2, '0')}</span>
          <p className="text-xs text-green-200">Hours</p>
        </div>
        <span className="text-3xl font-bold text-white">:</span>
        <div className="text-center">
          <span className="text-3xl font-bold text-white">{String(time.minutes).padStart(2, '0')}</span>
          <p className="text-xs text-green-200">Minutes</p>
        </div>
        <span className="text-3xl font-bold text-white">:</span>
        <div className="text-center">
          <span className="text-3xl font-bold text-white">{String(time.seconds).padStart(2, '0')}</span>
          <p className="text-xs text-green-200">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;