import React from "react";
import "../../index.css"
import Nav from "./navbar";
import Footer from "./footer";


const Contact = () => {
  return (
    <>
    <Nav/>
    <form className="flex justify-center items-center bg-black w-full py-5" action="https://formspree.io/f/mwkgzoor" method="POST">
      <div className="mx-auto w-[620px] flex flex-col gap-3">
        <h2 className="h-[71px] w-[620px] text-white text-xl font-semibold flex justify-center items-center">
          Contact
        </h2>
        <div className="flex flex-col gap-6 items-center" >
          <input
            type="text"
            className="h-[56px] w-[591px] pl-4 pr-2 rounded-xl outline-none"
            placeholder="Name"
            name="name"
          />
          <input
            type="email"
            className="h-[56px] w-[591px] pl-4 pr-2 rounded-xl outline-none"
            placeholder="Email"
            name="email"
          />
          <textarea
            rows={5}
            className="h-[161px] w-[591px] pl-4 pr-2 py-2 rounded-xl outline-none"
            placeholder="Message"
            name="message"
          />
          <button
            type="submit"
            className="h-[56px] w-[591px] flex justify-center items-center text-xl font-semibold text-black bg-[#24FF00] rounded-xl outline-none  active:text-black active:bg-[#24FF00] hover:bg-white hover:text-black duration-200"
          >
            Send
          </button>
        </div>
      </div>
    </form>
    <Footer/>
    </>
  );
};

export default Contact;