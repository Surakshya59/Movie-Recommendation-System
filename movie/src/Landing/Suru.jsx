import { Link } from "react-router-dom";
import backgroundImage from "../images/bgmain.jpg";
import Navbar from "../Navbar/Nav";

const LandingPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  return (
    <>
      <div style={backgroundStyle} className="min-h-screen flex flex-col justify-between">
        <div className="flex-grow flex items-center justify-center">
          <aside className="fixed top-0 left-0 w-64 h-full bg-gray-900 p-5 flex flex-col justify-between">
            <div>
              <h1 className="text-red-900  text-center font-bold text-4xl mb-10">MRS</h1>
              <nav>
                <ul>
                  <li className="mb-4 r">
                    <Link to="#home" className="text-white text-lg">Home</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#watchlist" className="text-white text-lg">Watchlist</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#trending" className="text-white text-lg">Trending</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <ul>
                <li className="mb-4">
                  <Link to="/login" className="text-white text-lg block">Login</Link>
                </li>
                <li className="mb-4">
                  <Link to="/signup" className="text-white text-lg block">Signup</Link>
                </li>
              </ul>
            </div>
          </aside>
          <main className="ml-10 mt-0 w-2/3 flex flex-col justify-between">
            <section className="mb-10 flex-grow">
              <div className="bg-black bg-opacity-50 p-6 w-full rounded-lg h-full">
                <h2 className="text-3xl mb-4 text-white">
                  <br />
                  Movies &<br /> TV recommendations <br />based on your taste
                </h2>
                <br />
                <p className="text-lg">
                  <br />
                  Find your next favorite show and stream for free
                </p>
              </div>
            </section>
            <section className="bg-gray-900 bg-opacity-75 p-20 rounded-lg h-full">
              <h3 className="text-yellow-500 text-2xl">Your personal streaming guide</h3>
            </section>
          </main>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default LandingPage;
