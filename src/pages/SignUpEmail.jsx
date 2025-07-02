import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-950 md:p-20 p-3">
      <div className="md:w-3/5 w-full md:h-[70%] h-[90%] transBack flex flex-col items-center md:p-20 p-4 py-10 rounded-lg gap-10">
        <div className="md:size-44 size-20 md:-mt-48 -mt-20 rounded-full bg-gray-950"></div>
        <h1 className="text-white text-3xl">Sign up with your Email</h1>
        <input
          type="text"
          placeholder="Enter Email"
          className="border-1 border-white p-6 text-white rounded-full w-full"
        />
        <button className="border-1 border-white p-6 rounded-full bg-white text-black w-full">
          Sign up
        </button>
        <button
          className="border-1 border-white p-6 text-white rounded-full w-full"
          onClick={() => {
            history.back();
          }}
        >
          Go back
        </button>
        <p className="text-white text-base">
          Already have an account? <Link to={"/login-email"}>Sign in</Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
