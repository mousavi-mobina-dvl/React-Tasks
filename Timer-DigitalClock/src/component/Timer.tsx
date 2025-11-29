import React, { useState, useEffect, useRef } from "react";

type TimerProps = {
  initialTime: number;
};

const Timer: React.FC<TimerProps> = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;

    intervalRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Stop timer at 0
          clearInterval(intervalRef.current!);
          setRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  const start = () => timeLeft > 0 && setRunning(true);
  const stop = () => setRunning(false);
  const reset = () => {
    setTimeLeft(initialTime);
    setRunning(false);
  };

  return (
    <div className="timer" style={{ textAlign: "center" }}>
      <h2>Countdown Timer</h2>
      <h1>{timeLeft}s</h1>

      {!running && timeLeft > 0 && <button onClick={start}>Start</button>}
      {running && <button onClick={stop}>Stop</button>}

      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
