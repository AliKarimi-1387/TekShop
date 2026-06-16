import HeroImg from "../../assets/img/hero-apple.jpg";

function Hero() {
  return (
    <>
      <div
        className="h-[93vh] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="container mx-auto flex justify-center relative">
            <h1 className="text-7xl absolute top-40"><span className="text-yellow-400">Tek</span><span className="text-blue-500">Shop</span></h1>
        </div>
      </div>
    </>
  );
}

export default Hero
