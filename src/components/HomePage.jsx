import * as React from "react";
import "../index.css";
import Nav from "./layouts/navbar";
import Footer from "./layouts/footer";
import hand from "../public/hand.png"
import sliders from "../public/sliders.png"


function Home() {
  return (
    <>
    <div className="bg-black h-screen">
    <Nav></Nav>
    <div className="flex flex-col items-center">
      
      <div className="mt-20 w-full max-w-[1128px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src={hand}
                      className="grow shrink-0 max-w-full aspect-[1.01] w-[175px] max-md:mt-4"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
                    <div className="self-stretch my-auto text-2xl font-bold text-center text-white max-md:mt-10">
                      Ask questions, Get answers
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-8 mt-16 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src={sliders}
                      className="shrink-0 max-w-full aspect-square w-[125px] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
                    <div className="self-stretch my-auto text-2xl font-bold text-center text-white max-md:mt-10">
                      People’s opinion matters
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
            <div className="py-28">
              <button className="justify-center items-center self-stretch px-16 py-10 my-auto w-full text-2xl font-bold text-center text-black underline bg-white rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full"><a href="/createSondage" className="underline text-current">Creer un Sondage</a></button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer></Footer>
      </div>
    </>
  );
}
export default Home;
