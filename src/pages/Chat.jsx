import { useState } from "react";
import hamburger from "../assets/hamburger-icon.svg";
import search from "../assets/search-icon.svg";
const Chat = () => {
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
            <div className="flex flex-col gap-10 items-start text-lg font-semibold p-3">
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
          <span className="bg-green-950 text-white font-bold text-3xl p-2 rounded-full px-4">
            C
          </span>
        </div>
        {/*  */}
        <h1 className="text-center my-7 text-2xl font-semibold">MedNova AI</h1>
        <div className="border-[0.5px] rounded-lg flex flex-col  self-end justify-self-center bg-black h-[300px] w-7/10 p-10 ">
          <textarea
            className="w-full outline-none border-0 h-4/5 text-2xl"
            placeholder="Ask MedNova anything"
          ></textarea>
          <div className="flex flex-row justify-between w-full h-1/5">
            <button className="bg-gray-800 text-yellow-400 size-10 text-lg font-bold rounded-full rotate-90">
              ↀ
            </button>
            <button className="bg-gray-800 text-yellow-400  size-10 text-lg font-bold rounded-full">
              ↑
            </button>
          </div>
        </div>
      </div>
      {/* main end */}
    </div>
  );
};
export default Chat;
