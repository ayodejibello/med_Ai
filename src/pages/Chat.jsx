import { useState } from "react";
import hamburger from "../assets/hamburger-icon.svg";
import arrowUp from "../assets/arrow-up.png";
import attach from "../assets/attach.png";
import search from "../assets/search-icon.svg";
import camera from "../assets/camera-icon.png";
import file from "../assets/file-icon.png";
import gallery from "../assets/gallery-icon.png";

const Chat = () => {
  // const [message, setMessage] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [collapse, setCollapse] = useState(true);
  return (
    <div className="h-screen flex bg-gray-950 text-white">
      {/* sidebar */}
      <div
        className={`${
          collapse ? "w-[6%] overflow-hidden" : "w-[25%]"
        } bg-gray-800 flex p-4 flex-col gap-8 items-start transition-all tracking-wider`}
      >
        <button
          onClick={() => {
            setCollapse(!collapse);
          }}
        >
          <img src={hamburger} className="min-w-10" />
        </button>
        {!collapse && (
          <div className="flex p-4 flex-col items-start gap-8">
            <button>+ New chat</button>
            <h1 className="text-xl font-semibold">Recent</h1>
            <div className="bg-gray-600 flex items-center p-4 rounded-full gap-2">
              <img src={search} className="w-6" />
              <input
                type="text"
                className="outline-none"
                placeholder="search recent"
              />
            </div>
            <div className="flex flex-col gap-10 items-start text-lg font-light p-3">
              <p>Signs of Malaria</p>
              <p>Signs of Malaria</p>
              <p>Signs of Malaria</p>
              <p>Signs of Malaria</p>
            </div>
          </div>
        )}
      </div>
      {/* sidebar */}
      {/* main */}
      <div className="p-10 w-full">
        <div className="flex justify-between items-center w-full">
          <h1>Mednova AI</h1>
          <span className="bg-green-700 text-white font-bold text-3xl p-2 rounded-full px-4">
            C
          </span>
        </div>
        {/*  */}
        <h1 className="text-center my-7 text-2xl font-semibold">MedNova AI</h1>
        <div className="border-[0.5px] rounded-lg flex flex-col  self-end justify-self-center bg-black h-[300px] w-7/10 p-10 relative">
          <textarea
            className="w-full outline-none border-0 min-h-4/5 text-2xl"
            placeholder="Ask MedNova anything"
          ></textarea>
          <div className="flex flex-row justify-between w-full h-1/5">
            <button
              className="rounded-full px-2 py-2 bg-gray-800"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <img src={attach} />
            </button>
            {showMenu && (
              <div className="flex flex-col bg-gray-900 w-48 h-max gap-3 rounded-sm absolute bottom-28">
                <div className="flex items-center gap-3 hover:bg-white hover:text-black p-2 cursor-pointer">
                  <img src={camera} className="bg-white p-2 rounded-md w-10" />
                  <span>camera</span>
                </div>
                <div className="flex items-center gap-3 hover:bg-white hover:text-black p-2 cursor-pointer">
                  <img src={gallery} className="bg-white p-2 rounded-md w-10" />
                  <span>gallery</span>
                </div>
                <div className="flex items-center gap-3 hover:bg-white hover:text-black p-2 cursor-pointer">
                  <img src={file} className="bg-white p-2 rounded-md w-10" />
                  <span>files</span>
                </div>
              </div>
            )}
            <button className="rounded-full px-3 py-2 bg-gray-800">
              <img src={arrowUp} alt="" />
            </button>
          </div>
        </div>
      </div>
      {/* main end */}
    </div>
  );
};
export default Chat;
