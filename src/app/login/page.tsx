'use client';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // To toggle between login/signup

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic (API request, validation)
      console.log('Login:', { email, password });
    } else {
      // Handle signup logic (API request, validation)
      console.log('Signup:', { email, password });
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-[#dc9d9d] rounded-md shadow-md">
      <h2 className="text-2xl text-[#fcfbf4] font-semibold text-center mb-6">
        {isLogin ? 'Login' : 'Sign Up'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[#fcfbf4] mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full border text-[#030] rounded-md py-2 px-3"
            required
          />
        </div>
        <div>
          <label className="block text-[#fcfbf4] mb-1">Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full border text-[#030] rounded-md py-2 px-3"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-[#fcfbf4] font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p className="mt-4 text-[#fcfbf4] text-center">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-[#fcfbf4] hover:text-blue-700 font-semibold ml-1 focus:outline-none"
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default Login;
