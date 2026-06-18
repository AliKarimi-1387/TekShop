import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import type { AppDisptach, RootState } from "../store/store";
import { useEffect } from "react";
import { mobileListTarget } from "../slices/mobile";
import LoadingCompoenent from "../components/Loading";
import ProductsCard from "../components/cards/ProductsCard";

function MobileList() {
  const { brand } = useParams();
  const { mobile, loading, error } = useSelector(
    (state: RootState) => state.mobileList,
  );
  const input: string = "smartphones";
  const dispatch = useDispatch<AppDisptach>();
  useEffect(() => {
    dispatch(mobileListTarget({ brand, input }));
  }, [dispatch]);

  return (
    <>
      <div className="max-w-screen-2xl px-6 mx-auto my-8">
        {loading && <LoadingCompoenent />}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {error && (
            <div className="text-rose-600 font-bold text-3xl">{error}</div>
          )}

          {mobile &&
            mobile.map((item) => {
              return (
                <ProductsCard item={item} key={item.id} target="mobiles/mobile"/>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default MobileList;
