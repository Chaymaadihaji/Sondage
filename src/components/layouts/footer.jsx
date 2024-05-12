import * as React from "react";
import "../../index.css";

function Footer() {
  return (
    <>
    <div className="flex flex-grow flex-col items-center w-full py-10 bg-black">
    <div className="self-stretch mt-8 w-full bg-white border border-white border-solid min-h-[1px] max-md:max-w-full" />
      <div className="mt-7 text-2xl font-bold text-white">
        Copyright 2024 ©<br />
      </div>
      </div>
    </>
  )
}
export default Footer;