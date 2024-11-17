import React, { useEffect, useState } from "react";
import Update from "./Updates/Update";

import { collection, onSnapshot } from "firebase/firestore";

import { db } from "../firebase";

const Updates = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "updates"), (snapshot) => {
      const docsArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUpdates(docsArray);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className="flex flex-col gap-20 justify-center text-center my-20">
      <div className="flex flex-col gap-5 h-max md:w-[80%] m-auto">
        <h1 className="text-4xl sm:text-6xl font-bold">Application Updates</h1>
        <p className="text-lg text-gray-500 m-auto">
          Stay informed with the latest features, improvements, and news from
          Ecofy.
        </p>
        <a
          href="https://github.com/xfendi/ecofy-mobile/commits/main/"
          target="_blank"
          className="btn dark m-auto"
        >
          View All Updates On GitHub
        </a>
      </div>
      {updates.length > 0 ? (
        <div className="flex flex-col gap-5">
        {updates.map((update, index) => (
          <Update key={index} update={update} />
        ))}
      </div>
      ) : (
        <p className="text-lg text-gray-500 m-auto">
          No updates available yet. Stay tuned for more updates!
        </p>
      )}
    </section>
  );
};

export default Updates;
