import * as React from "react";
import "../../index.css"
import logo from "../../public/logo.png"

function Nav() {
  return (
    <>
    <div className="flex flex-col items-center py-10 bg-black ">
      <div className="flex gap-8 px-5 w-full text-white max-w-[1150px] max-md:flex-wrap max-md:max-w-full">
        <div className="shrink-0 max-w-full aspect-square w-[100px] h-[25px] max-md:mt-10 -mt-10  mr-[200px]">
          <img src={logo} alt="Logo" />
        </div>

        <div className="flex gap-14 self-start mt-1 text-2xl text-center max-md:flex-wrap max-md:max-w-full">
          <a href="/" className="underline text-current">Acceuil</a>
          <a href="/createSondage" className="underline text-current">Creer Sondage</a>
          <a href="/Sondages" className="underline text-current">Les Sondages</a>
          <a href="/contact" className="underline text-current">Contact</a>
        </div>
      </div>
      <div className="self-stretch mt-8 w-full bg-white border border-white border-solid min-h-[1px] max-md:max-w-full" />
    </div>
    
    </>
  )
}
export default Nav;
