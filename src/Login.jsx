 import { Link } from "react-router-dom"

const Login = () => {
  return (
   
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950">

      <div className="flex flex-row  p-8 gap-10 rounded-lg shadow-xl shadow-violet-500 max-w-2xl w-full "
      style={{background: "linear-gradient(45deg, oklch(29.1% 0.149 302.717)40%, oklch(83.3% 0.145 321.434) 100%)"}}
      >

 <div className="flex flex-col flex-1 ">
  <h1 className="text-white text-2xl font-bold mb-4 text-center">Login </h1>
<p className="text-white ">Username
  <span className="text-red-400">*</span>
</p>
<input 
  type="text"
  required
  className="w-full bg-transparent border-b-2 border-red-400 focus:border-blue-400 outline-none p-2"
/>
<p className="text-white mt-8">Password
<span className="text-red-400">*</span></p>
          <input
            type="password"
            required
            className="w-full bg-transparent border-b-2 border-red-400 focus:border-blue-400 outline-none p-2 mb-4 appearance-none transition-colors duration-300"
          />

<button className="text-white font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 mt-8"
style={{background: "linear-gradient(180deg, oklch(29.3% 0.136 325.661)0%, oklch(45.2% 0.211 324.591) 100%)"}}>Login</button>

<div className="flex flex-col items-center mt-4">
<p className="text-white">Don't have an account?</p>
<Link to="/signup" className="text-blue-300 hover:text-blue-500 text-sm">
  Sign Up
</Link>
</div>

  </div>  

<div className="flex flex-col items-center justify-center flex-1">
  <h2 className="text-white text-4xl font-bold">WELCOME</h2>
  <h2 className="text-white text-4xl font-bold">BACK!</h2>
 
</div>
 </div>
    </div>
    
  )
}

export default Login;