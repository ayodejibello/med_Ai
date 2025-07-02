import mail from "../assets/email.png";
import apple from "../assets/apple-icon.png";
import google from "../assets/google-icon.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-950 md:p-20 p-3">
      <div className="md:w-3/5 w-full md:h-[70%] h-[90%] transBack flex flex-col items-center md:p-20 p-4 py-10 rounded-lg gap-10">
        <div className="md:size-44 size-20 md:-mt-48 -mt-20 rounded-full bg-gray-950"></div>
        <h1 className="text-white text-3xl">Sign up</h1>
        <Link
          to={"/signup-email"}
          className="border-1 border-white p-6 rounded-full bg-white text-black w-full flex justify-center gap-2 items-center"
        >
          <img src={mail} className="w-8" />
          Sign up with Email
        </Link>
        <button className="border-1 border-white p-6 text-white rounded-full w-full flex justify-center gap-2 items-center">
          <img src={google} className="w-6" /> sign up with Google
        </button>
        <button className="border-1 border-white p-6 text-white rounded-full w-full flex justify-center gap-2 items-center">
          <img src={apple} className="w-8" /> sign up with Apple
        </button>
        <p className="text-white text-base">
          Already have an account? <Link to={"/login"}>Log in</Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
