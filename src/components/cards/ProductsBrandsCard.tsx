import { Link } from "react-router";
import Itembrand from "../../interfaces/ProductsInfoBrandsInterface";



function ProductsBrandsCard({ item }: Itembrand) {
  return (
    <>
      <div
        className="bg-gray-100 relative text-center py-4 rounded-2xl shadow hover:scale-101 transition"
        key={item.brand}
      >
        <Link to={`/mobiles/mobile/${item.brand}`}>
          <img src={item.thumbnail} className="justify-self-center" alt="" />
          <h1 className="text-3xl">{item.brand}</h1>
        </Link>
      </div>
    </>
  );
}

export default ProductsBrandsCard;
