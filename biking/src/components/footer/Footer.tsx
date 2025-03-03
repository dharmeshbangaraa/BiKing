import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Popular Brands */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Brands</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Royal Enfield</a></li>
              <li><a href="#" className="hover:text-white">KTM</a></li>
              <li><a href="#" className="hover:text-white">Yamaha</a></li>
              <li><a href="#" className="hover:text-white">Honda</a></li>
            </ul>
          </div>

          {/* Trending Bikes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trending Bikes</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">KTM RC 390</a></li>
              <li><a href="#" className="hover:text-white">Yamaha R15</a></li>
              <li><a href="#" className="hover:text-white">Royal Enfield Meteor</a></li>
              <li><a href="#" className="hover:text-white">TVS Apache RTR</a></li>
            </ul>
          </div>

          {/* Upcoming Bikes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Upcoming Bikes</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Hero Xpulse 400</a></li>
              <li><a href="#" className="hover:text-white">Suzuki V-Strom 250</a></li>
              <li><a href="#" className="hover:text-white">Yamaha MT-03</a></li>
              <li><a href="#" className="hover:text-white">Benelli TRK 251</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={20} /></a> */}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-6" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} BiKing.com All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
