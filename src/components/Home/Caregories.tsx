import { Link } from "react-router";

function Categoreis() {
  return (
    <div className="my-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <Link to={"/phones"}>
            <img src="phone.jpg" alt="" className="w-full" />
            <h1 className="text-3xl absolute top-0 left-85">Mobiles</h1>
          </Link>
        </div>
        <div className="relative">
          <Link to={"/laptops"}>
            <img src="laptop.jpg" alt="" className="w-full" />
            <h1 className="text-3xl absolute top-0 left-85 text-white">Laptops</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categoreis;
