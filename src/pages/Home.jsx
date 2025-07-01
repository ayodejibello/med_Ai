import NavBar from "../components/NavBar";
import heart from "../assets/heart.png";
import dummy from "../assets/dummy.jpg";
import facebook from "../assets/facebook.svg";
import insta from "../assets/instagram.png";
import phone from "../assets/phone.png";
import X from "../assets/twitter.svg";
import arrowUp from "../assets/arrow-up.png";
import medNovaPic from "../assets/mednova.png";
import robot from "../assets/robot.png";
import wave from "../assets/wave.png";
import r2 from "../assets/r2.png";
import { Link } from "react-router-dom";

const ProfileCard = ({ image, name, position }) => {
  return (
    <div className="flex flex-col items-center gap-4 font-semibold text-xl">
      <img src={image} alt={name} className="rounded-full md:size-52 size-24" />
      <span>{name}</span>
      <span>{position}</span>
    </div>
  );
};
const Home = () => {
  return (
    <div className="homepage min-h-screen text-white">
      <NavBar />
      <div className="mt-10">
        <h1 className="text-6xl font-bold text-center">MedNova AI</h1>
        <h2 className="text-lg font-light text-center w-2/3 mx-auto mt-4">
          Empowers clinicans, optimize operations, and deliver exceptional care
          with cutting edge AI technology
        </h2>
        {/*  */}
        <div className="my-20 py-20 px-10">
          <div
            className="h-96 md:w-1/3 w-full md:border-[1px] border-none border-gray-700 rounded-sm flex self-center justify-self-center md:relative bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${r2})` }}
          >
            <div className="w-max absolute -left-[70%] -top-10 md:flex hidden  justify-center  flex-col rounded-sm ">
              <h1 className="text-4xl font-bold">Mednova AI,</h1>
              <h2 className="text-3xl font-bold text-lime-400">
                Accelerates diagnostics
              </h2>
            </div>
            <div className="w-60 h-20 bg-gray-700 text-white absolute -right-[50%] -top-10 md:flex hidden justify-center items-center flex-col rounded-sm">
              <h1 className="text-gray-300">Health score</h1>
              <h2 className="text-2xl font-semibold tracking-wide">8/10</h2>
            </div>
            <div className="w-60 h-20 bg-gray-700 text-white absolute -left-[50%] bottom-10  md:flex hidden justify-center items-center flex-col rounded-sm">
              <h1 className="text-gray-300">Heart rate</h1>
              <h2 className="text-2xl font-semibold tracking-wide">70BPM</h2>
            </div>
            <div className="w-60 h-20 bg-gray-700 text-white absolute -right-[50%] -bottom-10  md:flex hidden justify-center items-center flex-col rounded-sm">
              <h1 className="text-gray-300">Heart rate</h1>
              <h2 className="text-2xl font-semibold tracking-wide">70BPM</h2>
            </div>
          </div>
        </div>

        {/* the 4 box rating section  */}
        {/* <div className="grid grid-cols-2 gap-6 w-4/5 mx-auto mt-20 ">
          <div className="border-1 h-60 flex flex-col justify-center items-center rounded-xl border-gray-500 scaler">
            <span className="text-gray-200">Total users</span>
            <span className="text-4xl font-bold text-amber-300">+258k</span>
          </div>
          <div className="border-1 h-60 flex flex-col justify-center items-center rounded-xl border-gray-500 scaler">
            <span className="text-gray-200">ratings</span>
            <span className="text-4xl font-bold text-amber-300">4.8</span>
          </div>
          <div className="border-1 h-60 flex flex-col justify-center items-center rounded-xl border-gray-500 scaler">
            <span className="text-gray-200">Total users</span>
            <span className="text-4xl font-bold text-amber-300">+258k</span>
          </div>
          <div className="border-1 h-60 flex flex-col justify-center items-center rounded-xl border-gray-500 scaler mb-10">
            <span className="text-gray-200">ratings</span>
            <span className="text-4xl font-bold text-amber-300">4.8</span>
          </div>
        </div> */}
        {/*  */}
        <h1 className="text-center text-3xl mt-16 mb-4">
          Ask mednova anything
        </h1>
        <Link to="/chat">
          <div className="border-1 rounded-lg flex flex-col justify-between self-center justify-self-center bg-black h-80 w-9/10 p-10">
            <span className="text-2xl text-gray-400">how can I help you?</span>
            <button className=" bg-gray-900 size-max p-1 px-2 rounded-lg self-end">
              <img src={arrowUp} />
            </button>
          </div>
        </Link>

        {/*  */}
        <div className="p-10 px-20">
          <h1 className="text-4xl font-bold text-center mt-32 mb-8">
            Revolutionalize healthcare with AI
          </h1>
          <p className="text-lg font-light text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quae ipsa alias amet impedit vel at autem voluptas? Corrupti facilis
            aspernatur tenetur fugit voluptatibus nemo ducimus laborum similique
            numquam doloremque!
          </p>
          {/*  */}

          <div className="flex md:flex-row flex-col items-center gap-10 justify-between w-full pb-32 mt-20">
            <div className="flex flex-col items-center justify-center gap-12">
              <img src={heart} className="w-44 scaler" />
              <div className="border-1 rounded-md p-5 text-lg ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                obcaecati impedit est assumenda repellat nihil ea fugit magni?
                Commodi harum illum magni provident, quibusdam laboriosam
                voluptates itaque in sapiente fuga. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nisi, doloribus.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-12">
              <img src={wave} className="w-44 scaler" />
              <div className="border-1 rounded-md p-5 text-lg ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                obcaecati impedit est assumenda repellat nihil ea fugit magni?
                Commodi harum illum magni provident, quibusdam laboriosam
                voluptates itaque in sapiente fuga. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nisi, doloribus.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-12">
              <img src={robot} className="w-44 scaler" />
              <div className="border-1 rounded-md p-5 text-lg ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                obcaecati impedit est assumenda repellat nihil ea fugit magni?
                Commodi harum illum magni provident, quibusdam laboriosam
                voluptates itaque in sapiente fuga. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nisi, doloribus.
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="bg-gray-300 p-20">
          <img src={medNovaPic} className="scaler" />
        </div>
        {/*  */}
        <h1 className="mt-20 mb-10 text-center text-3xl font-bold">
          Meet our team
        </h1>
        <div className="flex items-center md:flex-row flex-col justify-center overflow-x-scroll p-10">
          {/* <button className="text-6xl font-bold">‹</button> */}
          <div className="flex md:flex-row flex-col items-center gap-16">
            <ProfileCard
              name={"Shadow Mike"}
              position={"General Manager"}
              image={dummy}
            />
            <ProfileCard
              name={"Shadow Mike"}
              position={"General Manager"}
              image={dummy}
            />
            <ProfileCard
              name={"Shadow Mike"}
              position={"General Manager"}
              image={dummy}
            />
            <ProfileCard
              name={"Shadow Mike"}
              position={"General Manager"}
              image={dummy}
            />
          </div>
          {/* <button className="text-6xl font-bold">›</button> */}
        </div>
        {/*  */}
        <h1 className="mt-28 mb-16 text-center text-3xl font-bold">
          Our Socials
        </h1>
        <div className="flex md:flex-row flex-col justify-center items-center gap-20 p-10">
          <img src={phone} className="md:w-28 w-16 bg-white rounded-full" />
          <img src={X} className="md:w-28 w-16" />
          <img src={insta} className="md:w-28 w-16" />
          <img src={facebook} className="md:w-28 w-16 bg-blue-700 rounded-lg" />
        </div>
      </div>
    </div>
  );
};
export default Home;
