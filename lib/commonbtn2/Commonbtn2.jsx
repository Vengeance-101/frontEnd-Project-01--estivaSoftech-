import Link from "next/link";
import React from "react";
const CommonBtn2 = ({ children }) => {
  return (
    <Link
      href="#"
      className=" w-fit inline-flex items-center common-btn-container-1 rounded-3xl gap-2 px-4 py-2  overflow-hidden mt-2 border-[#ffffff] border-2"
    >
      <div className="repeat-signal-1 h-4 w-4   rounded-full"></div>
      <div className="btn-content-1">{children}</div>
    </Link>
  );
};

export default CommonBtn2;
