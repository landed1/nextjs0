import Link from "next/link";
import { ColorContext } from "../components/AppContext";
import React, { createContext, useContext } from "react";

const Footer = () => {
  const [value, whatIs] = useContext(ColorContext);
  console.log(value);
  return (
    <div>
      <h1>Colo :{value.blue}</h1>
      <div className='flex justify-between p-6 bg-red-900 text-red-200'>
        <div className='w-6/12'>
          <h3 className='text-size-3'>Subscribe to my news</h3>
          <form className='flex'>
            <input
              className='text-red-900 w-full p-2 rounded-l outline-none focus:bg-red-200'
              type='email'></input>
            <button className='bg-red-600 hover:bg-red-400 rounded-r px-2 py-1'>
              Submit
            </button>
          </form>
        </div>
        <div className='w-6/12'>
          <h4 className='text-right'>Copyright Calvin Crane &copy; 2021</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
