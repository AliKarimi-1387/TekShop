import { useDispatch, useSelector } from "react-redux";
import type { AppDisptach, RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { mobileTargetFetch } from "../../slices/mobileTarget";
import { FaStar } from "react-icons/fa";
import LoadingCompoenent from "../Loading";

interface Id {
  target: number;
}

function Coments({ target }: Id) {
  const { error, loading, targetMobile } = useSelector(
    (state: RootState) => state.mobileTarget,
  );

  const dispatch = useDispatch<AppDisptach>();

  useEffect(() => {
    dispatch(mobileTargetFetch(target));
  }, [dispatch]);

  const date = new Date()
  return (
    <>
      <div className="max-w-2xl mx-auto mb-8">
        {loading && <LoadingCompoenent />}

        {error && <div className="text-rose-500 font-bold">{error}</div>}

        <div className="bg-indigo-50 rounded-2xl flex flex-col gap-4 py-4 px-4">
          {targetMobile &&
            targetMobile.reviews.map((comment) => {
              return (
                <div key={comment.reviewerEmail} className="bg-indigo-100 rounded-2xl py-2">
                  <div className="py-4 grid grid-cols-2 items-center">
                    <div className="justify-start ps-8 flex gap-2">
                      <h1 className="justify-self-center font-bold">name:</h1>
                      <h1 className="justify-self-start">
                        {comment.reviewerName}
                      </h1>
                    </div>
                    <h1 className="font-bold">{new Date(comment.date).toLocaleDateString("usa")}</h1>
                  </div>

                  <div>
                    <h1 className="px-8">{comment.comment}</h1>
                  </div>

                  <div className="grid grid-cols-2 px-8 items-center">
                    <h1>Rate:</h1>
                    <div className="flex justify-">
                      {Array.from({
                        length: Math.floor(comment.rating),
                      }).map((_, index) => (
                        <FaStar key={index} className="text-yellow-300"/>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Coments;
