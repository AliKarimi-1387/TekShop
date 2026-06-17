import { Link } from "react-router";
import Item from "../../interfaces/ProductsInfoInteface";
import { useDispatch } from "react-redux";
import { AppDisptach } from "../../store/store";
import { addProduct } from "../../slices/shopcart/shopcartSlice";



function ProductsCard({ item }:Item) {
  const dispatch = useDispatch<AppDisptach>()
  return (
    <>
      <div
        className="bg-gray-100 relative text-center py-4 rounded-2xl shadow hover:scale-101 transition"
        key={item.id}
      >
        <Link to={`/mobiles/mobile/target/${item.id}`}>
          <img src={item.thumbnail} className="justify-self-center" alt="" />
        </Link>
        <div className="flex items-center justify-around">
          <h1 className="text-3xl">{item.title}</h1>
          <h1 className="text-3xl">{item.price}</h1>
        </div>
        <div className="flex items-center justify-around mt-8 gap-12">
          <button onClick={()=>dispatch(addProduct({...item}))} className="primary-btn">Buy</button>
          <Link
            to={`/mobiles/mobile/target/${item.id}`}
            className="primary-btn"
          >
            Lern more
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductsCard;
