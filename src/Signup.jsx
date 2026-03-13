import { Link } from "react-router-dom"

const Signup = () => {
  return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950">

      <div className="flex flex-row  p-8 gap-10 rounded-lg shadow-xl shadow-violet-500 max-w-2xl w-full "
      style={{background: "linear-gradient(135deg  , oklch(83.3% 0.145 321.434) 20%, oklch(29.1% 0.149 302.717)50%)"}}>

<div className="flex flex-col items-center justify-center flex-1">
  <h2 className="text-white text-4xl font-bold">WELCOME</h2>
 
</div>

 <div className="flex flex-col flex-1">
   <h1 className="text-white text-2xl font-bold mb-6 text-center">Sign Up</h1>

          <p className="text-white text-sm mb-1">Username <span className="text-red-400">*</span></p>
          <input
            type="text"
            required
            className="w-full bg-transparent border-b-2 border-red-400 focus:border-blue-400 outline-none p-2 mb-4 appearance-none transition-colors duration-300"
          />

         
          <p className="text-white text-sm mb-1">Email <span className="text-red-400">*</span></p>
          <input
            type="email"
            required
            className="w-full bg-transparent border-b-2 border-red-400 focus:border-blue-400 outline-none p-2 mb-4 appearance-none transition-colors duration-300"
          />

          
          <p className="text-white text-sm mb-1">Password <span className="text-red-400">*</span></p>
          <input
            type="password"
            required
            className="w-full bg-transparent border-b-2 border-red-400 focus:border-blue-400 outline-none p-2 mb-4 appearance-none transition-colors duration-300"
          />

          
          <p className="text-white text-sm mb-1">Confirm Password <span className="text-red-400">*</span></p>
          <input
            type="password"
            required
            className="w-full bg-transparent border-b-2 border-red-400 focus:border-blue-400 outline-none p-2 mb-4 appearance-none transition-colors duration-300"
          />

          <button
            className="text-white font-bold py-2 px-4 rounded hover:opacity-90"
            style={{ background: "linear-gradient(180deg, oklch(29.3% 0.136 325.661) 0%, oklch(45.2% 0.211 324.591) 100%)" }}
          >
            Sign Up
          </button>

          <div className="flex flex-col items-center mt-4">
            <p className="text-white">Already have an account?</p>
            <Link to="/login" className="text-blue-300 hover:text-blue-500 text-sm">Login</Link>
          </div>  </div>  


 </div>
   </div>
 
  )
}

export default Signup;