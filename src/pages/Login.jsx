import mail from "../assets/email.png";
import apple from "../assets/apple-icon.png";
import google from "../assets/google-icon.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-950 md:p-20 p-10">
      <div className="md:w-3/5 w-full md:h-[70%] h-[90%] transBack flex flex-col items-center md:p-20 p-10 rounded-lg gap-10">
        <div className="md:size-44 size-20 md:-mt-48 -mt-20 rounded-full bg-gray-950 "></div>
        <h1 className="text-white text-3xl">Login</h1>
        <Link
          to={"/login-email"}
          className="p-6 rounded-full bg-white text-black w-full flex justify-center gap-2 items-center"
        >
          <img src={mail} className="md:w-8 w-6" />
          Log in with Email
        </Link>

        <button className="border-1 border-white p-6 text-white rounded-full w-full flex justify-center gap-2 items-center">
          <img src={google} className="md:w-6 w-4" /> Log in with Google
        </button>
        <button className="border-1 border-white p-6 text-white rounded-full w-full flex justify-center gap-2 items-center">
          <img src={apple} className="md:w-8 w-6" /> Log in with Apple
        </button>
        <p className="text-white text-base">
          Don't have an account? <Link to={"/signup"}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
