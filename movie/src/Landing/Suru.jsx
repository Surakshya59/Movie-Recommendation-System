import { Link } from "react-router-dom";
import backgroundImage from "../images/bgmain.jpg";

const LandingPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    minHeight: '100vh',
  };

  return (
    <>
      <div style={backgroundStyle} className="min-h-screen flex flex-col">
        <aside className="h-screen fixed top-left-0 w-60 bg-gray-900  p-6 flex flex-col justify-between">
          <h1 className="text-red-900 c font-bold text-4xl mb-10">MRS</h1>
          <nav>
            <ul>
              <li className="mb-1">
                <Link to="/login" className="text-white text-lg">Home</Link>
              </li>
              <li className="mb-1">
                <Link to="/login" className="text-white text-lg">Watchlist</Link>
              </li>
              <li className="mb-1">
                <Link to="/login" className="text-white text-lg">Trending</Link>
              </li>
            </ul>
          </nav>
          <div>
            <ul>
              <li className="mb-4 mb-10">
                <Link to="/login" className="text-white text-lg block">Login</Link>
              </li>
              <li className="mb-11">
                <Link to="/signup" className="text-white text-lg block">Signup</Link>
              </li>
            </ul>
          </div>
        </aside>
        <main className="ml-64 p-10 mr-20 flex-grow flex flex-col justify-between">
          <section className="mb-10 flex-grow">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg h-full">
              <h2 className="text-3xl mb-4 text-white">
               <br/> Movies &<br /> TV recommendations <br />based on your taste<br/>
              </h2>
              <p className="text-lg text-white">
               <br/> Find your next favorite show and stream for free
              </p>
            </div>
          </section>
          <section className="bg-gray-900 bg-opacity-60 p-20 mb-20 h-full rounded-lg">
            <h3 className="text-yellow-500 align-text-top text-2xl">Your personal streaming guide</h3>
          </section>
        </main>
      </div>
    </>
  );
};

export default LandingPage;
