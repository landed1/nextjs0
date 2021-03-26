import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { ColorContext } from "../components/AppContext";

const Navbar = () => {
  const da = useContext(ColorContext);

  let [payload] = da;
  let { colors, resorts, total } = payload;
  //console.log(colors.blue);
  //console.log(total);

  return (
    <div className='flex justify-between items-center mx-auto px-20 py-4 bg-yellow-600 text-white'>
      <div>
        <div className='inline bg-red-300 hover:bg-red-200 px-4 py-2 mr-2 rounded shadow-lg'>
          <Link href='/' passHref>
            Home
          </Link>
        </div>
        <div className='inline bg-red-300 hover:bg-red-200 px-4 py-2 mr-2 rounded shadow-lg'>
          <Link className='text-blue-800' href='/about'>
            About
          </Link>
        </div>
        <div className='inline bg-red-300 hover:bg-red-200 px-4 py-2 mr-2 rounded shadow-lg'>
          <Link className='text-blue-800' href='/contact'>
            Contact
          </Link>
        </div>
        <div className='inline bg-red-300 hover:bg-red-200 px-4 py-2 mr-2 rounded shadow-lg'>
          <span>Total: {total}</span>
        </div>
      </div>
      <div>
        <Image src='/mojito.jpg' width='40' height='40' />
      </div>
    </div>
  );
};

export default Navbar;
