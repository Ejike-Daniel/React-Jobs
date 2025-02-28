import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1d144d] to-[#0f0f23] text-white pt-10 pb-3 px-12 mt-6 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left Section */}
        <div className="mb-6 md:mb-0 flex flex-col justify-center items-center gap-2">
          <h2 className="text-xl font-semibold ">React Job</h2>
          <p className="text-sm text-gray-300 mt-2">
            Connecting top talent with leading companies worldwide.
          </p>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="font-semibold text-xl">Quick Links</h3>

          <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-300 text-sm ">
            <li>
              <Link to="/jobs" className="hover:text-white transition">
                Browse Jobs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/add-jobs" className="hover:text-white transition">
                Add Jobs
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start mt-2 space-x-4">
            <Link to="#" className="text-gray-300 hover:text-white transition">
              <FaLinkedin className="fab fa-linkedin"></FaLinkedin>
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white transition">
              <FaXTwitter className="fab fa-twitter"></FaXTwitter>
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white transition">
              <FaFacebook className="fab fa-facebook"></FaFacebook>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="flex flex-col justify-between items-center lg:flex-row pt-20  ">
        <div className="text-center text-gray-400 text-xs font-semibold">
          &copy; {new Date().getFullYear()} React Job. All rights reserved.
        </div>
        <div className="text-center text-gray-400 text-xs font-semibold">
          Developed by ElRey Web Development Service.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
