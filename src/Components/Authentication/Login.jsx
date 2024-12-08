import { useContext, useState } from "react";
import { FaEyeSlash, FaGoogle, FaRegEye } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ContextProvider } from "../ContextProvider/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const { userLogin, setUser, auth } = useContext(ContextProvider);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  // login with email and password
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    //console.log(email, password);

    userLogin(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        Swal.fire({
          title: "Success!",
          text: "Congrates! Successfully login",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  // login with google
  const provider = new GoogleAuthProvider();
  const handelGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
       // console.log(user);
        setUser(user);
        Swal.fire({
            title: "Success!",
            text: "Congrates! Successfully login",
            icon: "success",
            confirmButtonText: "OK",
          });
        navigate(user?.state ? user.state : '/');
        // IdP data available using getAdditionalUserInfo(result)
        
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="border border-gray-500 rounded-2xl p-7 lg:w-5/12 md:w-8/12 w-10/12 mx-auto mt-12 mb-10 bg-cyan-50 ">
      <h2 className="font-bold lg:text-3xl md:text-2xl text-xl mb-5 text-center">
        User Login
      </h2>
      <div className="text-center">
        <button
          onClick={handelGoogleLogin}
          className="btn btn-info text-white flex justify-center items-center lg:text-lg  mx-auto mt-5"
        >
          <FaGoogle></FaGoogle> login with google
        </button>
        <br></br>
        <div className="divider divider-info">OR</div>
      </div>
      <form onSubmit={handleLogin}>
        <div className="mb-5">
          <label className="text-text-clr font-semibold text-base">Email</label>
          <br></br>
          <input
            placeholder="User email"
            required
            type="email"
            name="email"
            className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2"
          />
          <label>
            {error.forgot && (
              <p className="text-red-500 text-sm mt-1">{error.forgot}</p>
            )}
          </label>
        </div>
        <div>
          <label className="text-text-clr font-semibold text-base relative">
            Password<br></br>
            <input
              placeholder="Password"
              required
              type={!showPassword ? "password" : "text"}
              name="password"
              className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2"
            />
            <a
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-sm absolute right-2 top-9 text-base"
            >
              {!showPassword ? <FaEyeSlash /> : <FaRegEye />}
            </a>
          </label>
        </div>
        <label>
          {error.login && (
            <p className="text-red-500 text-sm mt-1">{error.login}</p>
          )}
        </label>
        <label className="label">
          <a className="label-text-alt link link-hover text-sm">
            Forgot password?
          </a>
        </label>
        <button className="btn hover:bg-info bg-info text-white font-bold text-lg px-8 py-2 rounded-3xl border border-white mt-5 block mx-auto">
          Login
        </button>
      </form>
      <p className="font-medium text-sm text-center mt-4">
        Don't have an account?{" "}
        <Link to={"/register"} className="text-info underline">
          Click Here
        </Link>
      </p>
    </div>
  );
};

export default Login;
