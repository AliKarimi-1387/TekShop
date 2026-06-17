import { Link } from "react-router";

function Categoreis() {
  return (
    <div className="my-8">
      <div className="mx-auto max-w-screen-2xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative w-full">
          <Link to={"/mobiles"}>
            <img src="phone.jpg" alt="" className="w-full rounded-2xl" />
            <h1 className="text-3xl absolute top-0 left-[40%]">Mobiles</h1>
          </Link>
        </div>
        <div className="relative w-full">
          <Link to={"/laptops"}>
            <img src="laptop.jpg" alt="" className="w-full rounded-2xl" />
            <h1 className="text-3xl absolute top-0 left-[40%] text-white">Laptops</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categoreis;
