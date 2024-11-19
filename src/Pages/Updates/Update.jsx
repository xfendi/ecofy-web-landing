import React from "react";

import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Update = ({ update }) => {
  const { title, date, status, author, link, content } = update;
  return (
    <div className="flex flex-col text-start border p-5 gap-3 rounded-3xl w-full m-auto">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <h2 className="text-3xl font-bold w-max">{title}</h2>
          <div className="bg-gray-100 px-2 py-1 rounded-lg text-gray-500 text-[13px] border-2 border-solid border-gray-200 hidden sm:flex">
            {status}
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          className="btn text-[15px] flex items-center w-max h-max"
        >
          Install
        </a>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <IoCalendarClearOutline className="w-4 h-4 text-gray-500" />
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaRegUser className="w-4 h-4 text-gray-500" />
          <p className="text-sm text-gray-500">{author}</p>
        </div>
      </div>
      <div className="border-t pt-2">{content}</div>
    </div>
  );
};

export default Update;
