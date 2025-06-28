import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-950 p-20">
      <div className="w-3/5 h-[70%] transBack flex flex-col items-center p-20 rounded-lg gap-10">
        <div className="size-44 -mt-48 rounded-full bg-gray-950 "></div>
        <h1 className="text-white text-3xl">Sign up wit your Email</h1>
        <input
          type="text"
          placeholder="Enter Email"
          className="border-1 border-white p-6 text-white rounded-full w-full"
        />
        <button className="border-1 border-white p-6 rounded-full bg-white text-black w-full">
          Sign up
        </button>
        <button className="border-1 border-white p-6 text-white rounded-full w-full">
          Go back
        </button>
        <p className="text-white text-base">
          Already have an account? <Link to={"/login"}>Sign in</Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
