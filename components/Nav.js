import Link from "next/link";

const Navbar = () => {
  return (
    <div className='div'>
      <Link href='/'>Home</Link> <Link href='/about'>About</Link>
    </div>
  );
};

export default Navbar;
