import "../styles/hero.css";
import Countdown from "./Countdown.jsx";

function Hero() {
  return (
    <div className="hero">
      <h2>A Day of Magic and Celebration</h2>
      <h1>
        Althea Marie's <br /> Eighteenth
      </h1>
      <p>
        A new chapter begins—join us in a magical celebration of Althea&apos;s
        18th birthday.
      </p>
      <Countdown />
      <p>10 &bull; 04 &bull; 26</p>
      <p>Sunday | 5PM</p>
      <p>
        Mountain Rocks Resort, <br />
        Talisay, Lipa City
      </p>
    </div>
  );
}

export default Hero;
