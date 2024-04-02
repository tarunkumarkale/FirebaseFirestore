
import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../firebase/ContextApi';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let { EmailandPassword } = useContext(FirebaseContext);
  // let { putdata } = useContext(FirebaseContext);        👍both store style is good 

  const handleSubmit = (e) => {
    e.preventDefault();
 
    // putdata(email, password);       // 👍both calling style is good 
     EmailandPassword(email, password);
  
    console.log(email);
    console.log(password);
  };

  return (
    <form className="max-w-md mx-auto my-14" onSubmit={handleSubmit}>
    <h1 className="flex text-center underline-offset-2 font-extrabold text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
   Sign_up ✏️
 </h1>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="example@example.com"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="password"
          required
        />
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          />
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-black dark:text-black">
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign_up
      </button>
    </form>
  );
};

export default Register;

