import { useState } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";

// Assets
import logo from "../../assets/logo/HOTEL_LEIFUR_LOGO.png";

type Links = {
  pageName: string;
  path: string;
}[];
const pageLinks: Links = [
  {
    pageName: "our rooms",
    path: "Rooms",
  },
  {
    pageName: "the bar",
    path: "Bar",
  },
  {
    pageName: "about us",
    path: "About",
  },
  {
    pageName: "contact",
    path: "Contact",
  },
];

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="header_container bg-boxes py-4 px-10">
      <div className="flex justify-between items-center container mx-auto">
        <div className="hotel_logo">
          <Link to="/">
            <img src={logo} alt="Hotel Leifur Eiríksson" />
          </Link>
        </div>
        {/* ----------------- NAVBAR ------------------- */}
        <div>
          <button
            className="block md:hidden bg-boxes text-white"
            onClick={() => setShowNav(true)}
          >
            <FontAwesomeIcon icon={faBarsStaggered} />
          </button>
          <nav className="header_links">
            <ul className="hidden md:flex items-center">
              {pageLinks.map((link, indx) => (
                <li key={indx}>
                  <NavLink
                    to={`/${link.path}`}
                    className={`text-white capitalize mx-3 ${({
                      isActive,
                    }: any) => (isActive ? "active" : "")}`}
                  >
                    {link.pageName}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* ----------------- MOBILE NAVBAR ------------------- */}
        <div
          className={`mobile_nav fixed top-0 right-0 w-[70%] h-[100vh] md:hidden transition duration-[500ms] ease-in-out overflow-y-auto bg-boxes shadow-xl shadow-gray-900 ${
            !showNav ? "hide-nav" : ""
          }`}
        >
          <button
            className="bg-white w-full absolute top-0 left-0 flex justify-between items-center py-5 px-3"
            onClick={() => setShowNav(false)}
          >
            <span className="font-bold hotel-Name font-header text-header">
              Leifur Eiríksson
            </span>
            <span className="flex bg-white close-icon">
              <FontAwesomeIcon icon={faX} />
            </span>
          </button>
          <div className="flex flex-col justify-between h-full">
            <nav className="flex flex-col items-center mt-36">
              <ul className="w-full">
                {pageLinks.map((link, indx) => (
                  <>
                    <li key={indx} className="my-5">
                      <NavLink
                        to={`/${link.path}`}
                        className={`text-white capitalize mx-3 ${({
                          isActive,
                        }: any) => (isActive ? "active" : "")}`}
                        onClick={() => setShowNav(false)}
                      >
                        {link.pageName}
                      </NavLink>
                    </li>
                    <hr />
                  </>
                ))}
              </ul>
            </nav>
            {/* ================= MOBILE NAV SOCIAL MEDIA SECTION ==================== */}
            <div className="mt-[50px] min-h-[200px] relative">
              <div className="absolute bottom-10 w-full px-5">
                <h4 className="social_title font-paragraph font-bold mb-8 text-white text-[16px]">
                  SOCIAL ACCOUNTS
                </h4>
                <div className="social_media flex justify-between flex-wrap items-center">
                  <div>
                    <Link
                      to="https://www.facebook.com/leifurhotel/"
                      target="blank"
                      className="flex flex-col items-center"
                      onClick={() => setShowNav(false)}
                    >
                      <span>
                        <FontAwesomeIcon icon={faFacebook} />
                      </span>
                      <span className="text-white font-bold">FACEBOOK</span>
                      <span className="text-white">771K</span>
                      <span className="text-white">LIKES</span>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="https://www.instagram.com/hotelleifureiriksson/"
                      target="blank"
                      className="flex flex-col items-center"
                      onClick={() => setShowNav(false)}
                    >
                      <span>
                        <FontAwesomeIcon icon={faInstagram} />
                      </span>
                      <span className="text-white font-bold">INSTAGRAM</span>
                      <span className="text-white">335K</span>
                      <span className="text-white">FOLLOWERS</span>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="#"
                      className="flex flex-col items-center"
                      onClick={() => setShowNav(false)}
                    >
                      <span>
                        <FontAwesomeIcon icon={faTumblr} />
                      </span>
                      <span className="text-white font-bold">TUMBLER</span>
                      <span className="text-white">176K</span>
                      <span className="text-white">FOLLOWERS</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
