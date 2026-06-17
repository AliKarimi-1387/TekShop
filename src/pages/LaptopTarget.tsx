import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import type { AppDisptach, RootState } from "../store/store";
import { useEffect } from "react";
import { mobileTargetFetch } from "../slices/mobileTarget";
import LoadingCompoenent from "../components/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import Coments from "../components/targetMobile/Coments";
import { Navigation } from "swiper/modules";

function LaptopTarget() {
  const { target } = useParams();
  const numTarget = Number(target);
  const dispatch = useDispatch<AppDisptach>();
  const { targetMobile, loading, error } = useSelector(
    (state: RootState) => state.mobileTarget,
  );
  useEffect(() => {
    dispatch(mobileTargetFetch(numTarget!));
  }, [dispatch]);

  return (
    <>
      <div className="max-w-screen-2xl px-6 mx-auto justify-center">
        {loading && <LoadingCompoenent />}

        {error && <div className="text-rose-600 text-3xl">{error}</div>}

        <div className="max-w-3xl px-6 mx-auto pt-20">
          {targetMobile ? (
            <Swiper className="flex justify-center" modules={[Navigation]} navigation>
              {targetMobile.images.map((item) => {
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

        {targetMobile && (
          <div className="flex flex-col mx-[10%] text-3xl bg-blue-50 pb-6 rounded-2xl shadow mb-12 py-6">
            <div className="grid grid-cols-2 ps-[10%] border-b py-2">
                <h1>Name:</h1>
                <h1>{targetMobile.title}</h1>
            </div>
            {/* <div className="flex justify-around border-b py-2">
                <h1>Description:</h1>
                <h1>{targetMobile[0].description}</h1>
            </div> */}
            <div className="grid grid-cols-2 ps-[10%] border-b py-2">
                <h1>Price:</h1>
                <h1>{targetMobile.price}</h1>
            </div>
            <div className="grid grid-cols-2 ps-[10%] border-b py-2">
                <h1>weight:</h1>
                <h1>{targetMobile.weight}</h1>
            </div>
            <div className=" md:grid md:grid-cols-2 ps-[10%] py-2">
                <h1>description:</h1>
                <h1>{targetMobile.description}</h1>
            </div>
          </div>
        )}
        <Coments target={numTarget}/>
      </div>
    </>
  );
}

export default LaptopTarget;
