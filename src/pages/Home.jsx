import "../styles/home.css";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="home">
      <div className="bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Hero />
    </div>
  );
}

export default Home;
