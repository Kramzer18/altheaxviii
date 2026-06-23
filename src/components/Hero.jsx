import "../styles/hero.css";
import ornamentImage from "../assets/images/ornament.svg";
import watchImage from "../assets/images/watch.svg";
import Countdown from "./Countdown.jsx";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <img
          src={ornamentImage}
          alt="Ornament Image"
          className="ornament-image-top ornament-image"
        />
        <h1 className="hero-title">A NIGHT TO REMEMBER</h1>
        <h2 className="hero-name">Althea's 18th Birthday</h2>
        <p className="hero-tagline">
          A night of elegance, memories, and celebration. Join us for an
          unforgettable evening!
        </p>
        <Countdown />
        <p className="hero-date">October 4, 2026 | Sunday 5PM</p>
        <p className="hero-location">
          Mountain Rocks Resort, Talisay, Lipa City
        </p>
        <img
          src={ornamentImage}
          alt="Ornament Image"
          className="ornament-image-bottom ornament-image"
        />
      </div>
      <div className="clock-image-container">
        <img src={watchImage} alt="Watch Image" className="watch-image" />
      </div>
    </div>
  );
}

export default Hero;
