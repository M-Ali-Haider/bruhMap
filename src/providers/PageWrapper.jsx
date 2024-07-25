"use client";

import { useSelector } from "react-redux";

const PageWrapper = ({ children }) => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <div
      className={`${
        isSidebarOpen ? "md:px-9" : "md:px-2"
      } px-5 pt-7 max-h-[calc(100vh-84px)] max-w-[1440px] overflow-y-scroll w-full  no-scrollbar transition-all duration-200 ease-custom-ease`}
    >
      <div className={`min-h-screen pb-8 px-4 md:px-0`}>{children}</div>
    </div>
  );
};

export default PageWrapper;
