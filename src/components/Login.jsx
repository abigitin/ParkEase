function Login() {
  return (
    <>
      <div className="bg-black h-screen">
        <header className="text-yellow-300 font-bold text-3xl justify-center flex pt-6">
          <p className="bg-yellow-400 text-black mx-2 rounded-sm text-2xl">P</p>
          PARK <span className="text-white mx-2"> EASE</span>
        </header>
        <div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="bg-yellow-400 rounded-r-md m-4">Continue</button>
          <button className="bg-slate-300 rounded-r-md m-4">
            Continue with Google
          </button>
          <a href="" className="text-yellow-300">
            Dont have an account? Sign in
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
