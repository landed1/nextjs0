import Navbar from "./Nav";
import Footer from "./Footer";
const Layout = ({ children }) => {
  //console.log(children);
  {
    return (
      <div className='min-h-screen bg-gray-200 p-2'>
        <Navbar />
        <main className='min-h-screenx'>{children}</main>
        <Footer />
      </div>
    );
  }
};

export default Layout;
