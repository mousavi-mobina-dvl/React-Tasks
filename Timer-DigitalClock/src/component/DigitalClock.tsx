import React, { useState, useEffect } from 'react';

const DigitalClock: React.FC = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
  //new Date() creates a new Date object representing the current date and time.
  //.toLocaleTimeString() converts that date/time to a human-readable time string
  //in the format appropriate for the user's locale (e.g., "10:35:27 AM" in the US).

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  /* 
Start an interval that runs every 1000ms (1 second).
Inside the interval:
It calls setTime() with the current time every second.
This updates the component state (time) and triggers a re-render to show the new time.
Return a cleanup function:
When a component unmounts
You use a cleanup to:
Stop timers
Unsubscribe from services (like WebSockets)
Remove event listeners
Cancel API calls
When the effect re-runs (if dependencies change)
The cleanup runs before the effect runs again to avoid:
Duplicating listeners
Leaking memory
Accumulating unwanted behavior
Why the [] dependency array?
It means: Run this effect only once, when the component mounts. Not on updates or re-renders.
  */
  return (
    <div style={{textAlign: 'center', fontSize: '2.5rem', fontFamily: 'monospace' }}>
      <h3>now time is :</h3>
      {time}
    </div>
  );
};

export default DigitalClock;
