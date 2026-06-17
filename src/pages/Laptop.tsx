import { useDispatch, useSelector } from "react-redux";
import type { AppDisptach, RootState } from "../store/store";
import { useEffect } from "react";
import { fetchMobileBrands } from "../slices/MobileCategories";
import LoadingCompoenent from "../components/Loading";
import { Link } from "react-router";

function Laptop() {
  const { brands, loading, error } = useSelector(
    (state: RootState) => state.mobileSlice,
  );
  const dispatch = useDispatch<AppDisptach>();
  useEffect(() => {
    dispatch(fetchMobileBrands('laptops'));
  }, [dispatch]);

  return (
    <>
      <div className="max-w-screen-2xl px-6 mx-auto my-16">
        {loading && <LoadingCompoenent />}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {error && <div className="text-rose-600 font-bold text-3xl">{error}</div> } 

          {brands &&
            brands.map((item) => {
              return (
                <div  className="bg-gray-100 relative text-center py-4 rounded-2xl shadow hover:scale-101 transition" key={item.brand}>
                  <Link to={`/laptop/${item.brand}`}>
                    <img
                      src={item.thumbnail}
                      className="justify-self-center"
                      alt=""
                    />
                    <h1 className="text-3xl">{item.brand}</h1>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Laptop;
