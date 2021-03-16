import Navbar from "./Nav";

const Layout = ({ children }) => {
  {
    return (
      <div className=''>
        <Navbar />
        <main className=''>{children}</main>
      </div>
    );
  }
};

export default Layout;
