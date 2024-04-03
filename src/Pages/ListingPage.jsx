import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../firebase/ContextApi';

const ListingPage = () => {
  const {HandleCreateNewListing}=useContext(FirebaseContext)
  const [name, setname] = useState('');
  const [ISBNnumber, setISBNnumber] = useState('');
  const [Price, setPrice] = useState('');
  const [CoverPic, setCoverPic] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
 return await HandleCreateNewListing(name,ISBNnumber,Price,CoverPic)
  };

  return (
    <>
      <form className="max-w-md mx-auto my-14" onSubmit={handleSubmit}>
        <h1>Add a Book</h1>
        <div className="mb-6">
          <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Book Name"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="ISBNnumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            ISBN number
          </label>
          <input
            type="text"
            id="ISBNnumber"
            value={ISBNnumber}
            onChange={(e) => setISBNnumber(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ISBN number"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="Price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Price
          </label>
          <input
            type="text"
            id="Price"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Price"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <label htmlFor="CoverPic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Cover Picture
          </label>
          <input
            type="file"
            id="CoverPic"
            onChange={(e) => setCoverPic(e.target.files[0])}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create
        </button>
      </form>
    </>
  );
};

export default ListingPage;
