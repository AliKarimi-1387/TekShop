import { Link, useParams } from "react-router";
import type { AppDisptach, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { mobileListTarget } from "../slices/mobile";
import LoadingCompoenent from "../components/Loading";

function LaptopList() {
  const { brand } = useParams();
  const { mobile, loading, error } = useSelector(
    (state: RootState) => state.mobileList,
  );
  const input: string = "laptops";
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
                <div
                  className="bg-gray-100 relative text-center py-4 rounded-2xl shadow hover:scale-101 transition"
                  key={item.id}
                >
                  <Link to={`/laptop/target/${item.id}`}>
                    <img
                      src={item.thumbnail}
                      className="justify-self-center"
                      alt=""
                    />
                  </Link>
                  <div className="flex flex-col items-center justify-around">
                    <h1 className="text-3xl">{item.title}</h1>
                    <h1 className="text-3xl">{item.price}</h1>
                  </div>
                  <div className="flex items-center justify-around mt-8 gap-12">
                    <button className="primary-btn">Buy</button>
                    <Link
                      to={`/laptop/target/${item.id}`}
                      className="primary-btn"
                    >
                      Lern more
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default LaptopList;
