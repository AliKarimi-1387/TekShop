import AplIcon from "@iconify-react/token-branded/apl";
import { Link } from "react-router";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  return (
    <>
      <header className="bg-gray-200 shadow">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <Link to={"/"}>
            <AplIcon height="2rem" />
          </Link>

          <div className="flex gap-4 items-center">
            <Link to={"/mobiles"} className="font-bold hover:text-gray-600">
              Mobile
            </Link>
            <Link to={"/laptop"} className="font-bold hover:text-gray-600">
              Laptop
            </Link>
          </div>

          <div className="flex gap-4 items-center">
            <Link to={"/shopcart"}>
              <FaCartShopping />
            </Link>

            <Link to={"/login"} className="primary-btn">
              login
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
