import { useDispatch, useSelector } from "react-redux";
import type { AppDisptach, RootState } from "../store/store";
import { useEffect } from "react";
import { fetchMobileBrands } from "../slices/MobileCategories";
import LoadingCompoenent from "../components/Loading";
import ProductsBrandsCard from "../components/cards/ProductsBrandsCard";

function Mobiles() {
  const { brands, loading, error } = useSelector(
    (state: RootState) => state.mobileSlice,
  );
  const dispatch = useDispatch<AppDisptach>();
  useEffect(() => {
    dispatch(fetchMobileBrands("smartphones"));
  }, [dispatch]);

  return (
    <>
      <div className="max-w-screen-2xl px-6 mx-auto my-16">
        {loading && <LoadingCompoenent />}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {error && (
            <div className="text-rose-600 font-bold text-3xl">{error}</div>
          )}

          {brands &&
            brands.map((item) => {
              return <ProductsBrandsCard item={{...item}} key={item.brand} brand={'mobiles/mobile'} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Mobiles;
