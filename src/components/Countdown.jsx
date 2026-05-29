import { useEffect, useState } from "react";

function Countdown() {
  const targetDate = new Date("2026-10-04T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { expired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.expired) {
    return <h2>🎉 Happy 18th Birthday Althea!</h2>;
  }

  return (
    <div>
      <p className="date">
        {timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M{" "}
        {timeLeft.seconds}S
      </p>
    </div>
  );
}

export default Countdown;
