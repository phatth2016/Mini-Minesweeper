import { useEffect, useState } from "react";

const formatTime = (value) => {
  if (value.toString().length < 2) return "0" + value;
  return value;
};

const useTimer = (ref) => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  // const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
    let seconds = 0;
    let minutes = 0;
    let hour = 0;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        seconds += 1;
        if (seconds > 59) {
          seconds = 0;
          minutes += 1;
        }
        if (minutes > 59) {
          seconds = 0;
          minutes = 0;
          hour += 1;
        }
        ref.current.value =
          formatTime(hour) +
          " : " +
          formatTime(minutes) +
          " : " +
          formatTime(seconds);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    ref.current.value = "00 : 00 : 00";
  };
  return { handleStart, handlePauseResume, handleReset };
};

export default useTimer;
