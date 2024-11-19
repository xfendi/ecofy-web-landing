import React, { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";

import { db } from "../../firebase";

import { IoMdStar } from "react-icons/io";

const Ratings = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "reviews"), (snapshot) => {
      const docsArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(docsArray);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className="flex flex-col gap-20 justify-center text-center my-20">
      <div className="flex flex-col gap-5 h-max md:w-[80%] m-auto">
        <h1 className="text-4xl sm:text-6xl font-bold">
          What our users say about us
        </h1>
      </div>
      <div className=" flex flex-col gap-20">
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-auto">
            {reviews.slice(0, 3).map((review, index) => (
              <div
                key={index}
                className="border rounded-3xl p-5 text-start flex-1"
              >
                <div className="flex justify-between gap-5 items-center">
                  <p className="text-xl font-bold">{review.name}</p>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, index) => (
                      <div key={index} className="text-yellow-300">
                        <IoMdStar size={20} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-5 mt-5 border-t text-lg text-gray-500">
                  {review.content}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-500 m-auto">
            We do not have any review yet :(
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-5 w-max m-auto">
          {reviews.length > 3 && (
            <a href="/reviews" className="btn dark w-max m-auto">
              See All Reviews
            </a>
          )}
          <a href="/new-review" className="btn">
            Post New Review about Ecofy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Ratings;
