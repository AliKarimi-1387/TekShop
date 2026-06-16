import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import type { AppDisptach, RootState } from "../store/store";
import { mobileTargetFetch } from "../slices/mobileTarget";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LoadingCompoenent from "../components/Loading";
import { Navigation } from "swiper/modules";

function MobileTarget() {
  const { target } = useParams();
  const numTarget = Number(target);
  const dispatch = useDispatch<AppDisptach>();
  const { targetMobile, loading, error } = useSelector(
    (state: RootState) => state.mobileTarget,
  );
  useEffect(() => {
    dispatch(mobileTargetFetch(numTarget!));
  }, [dispatch]);

  console.log(targetMobile);
  return (
    <>
      <div className="container mx-auto justify-center">
        {loading && <LoadingCompoenent />}

        {error && <div className="text-rose-600 text-3xl">{error}</div>}

        <div className="container mx-auto px-30 pt-20">
          {targetMobile.length ? (
            <Swiper className="flex justify-center" modules={[Navigation]} navigation>
              {targetMobile[0].images.map((item) => {
                return (
                  <SwiperSlide>
                    <img src={item} alt="" className="flex justify-self-center"/>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            ""
          )}
        </div>

        {targetMobile.length && (
          <div className="flex flex-col mx-60 text-3xl bg-blue-50 pb-6 px-30 rounded-2xl shadow mb-12">
            <div className="grid grid-cols-2 ps-40 border-b py-2">
                <h1>Name:</h1>
                <h1>{targetMobile[0].title}</h1>
            </div>
            {/* <div className="flex justify-around border-b py-2">
                <h1>Description:</h1>
                <h1>{targetMobile[0].description}</h1>
            </div> */}
            <div className="grid grid-cols-2 ps-40 border-b py-2">
                <h1>Price:</h1>
                <h1>{targetMobile[0].price}</h1>
            </div>
            <div className="grid grid-cols-2 ps-40 border-b py-2">
                <h1>weight:</h1>
                <h1>{targetMobile[0].weight}</h1>
            </div>
            <div className="grid grid-cols-2 ps-40 border-b py-2">
                <h1>description:</h1>
                <h1>{targetMobile[0].description}</h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MobileTarget;
