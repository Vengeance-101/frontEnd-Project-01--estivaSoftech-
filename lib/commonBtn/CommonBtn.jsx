import Link from "next/link";
import React from "react";
const CommonBtn = ({ children }) => {
  return (
    <Link
      href="#"
      className=" w-fit inline-flex items-center common-btn-container rounded-3xl gap-2 px-4 py-2  overflow-hidden mt-8 border-[#314352] border-2"
    >
      <div className="repeat-signal h-4 w-4   rounded-full"></div>
      <div className="btn-content">{children}</div>
    </Link>
  );
};

export default CommonBtn;
