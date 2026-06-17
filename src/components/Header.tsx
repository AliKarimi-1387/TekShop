import AplIcon from "@iconify-react/token-branded/apl";
import { Link, NavLink } from "react-router";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  return (
    <>
      <header className="bg-gray-200 shadow">
        <div className="max-w-screen-2xl px-6 mx-auto py-4 flex justify-between items-center">
          <Link to={"/"}>
            <AplIcon height="2rem" />
          </Link>

          <div className="flex gap-4 items-center">
            <NavLink to={"/mobiles"} className={({isActive})=> isActive ? "font-bold text-blue-400 hover:text-blue-600":"font-bold hover:text-gray-600"}>
              Mobile
            </NavLink>
            <NavLink to={"/laptop"} className={({isActive})=> isActive ? "font-bold text-blue-400 hover:text-blue-600":"font-bold hover:text-gray-600"}>
              Laptop
            </NavLink>
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
