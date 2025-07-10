import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-red-800">
      <div className="flex justify-center">
        <div className="my-10 flex gap-8 ">
          <div>
            <h1 className="font-bold text-2xl mb-3">About</h1>
            <ul>
              <Link href={'/about'}>
              <li className="">About Us</li>
              </Link>
              <li>Feedback</li>
              <li>Job Oppertunities</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-3">Ordering</h1>
            <ul>
              <li>Help</li>
              <li>What do we sell</li>
              <li>Delivery Options</li>
            </ul>
          </div>
          <div className="">
            <h1 className="font-bold text-2xl mb-3">Selling</h1>
            <ul>
              <li className="">Get a quote</li>
              <li>What do we buy</li>
              <li>Grading Guidlines.</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-3">Social Media</h1>

            <ul>
              <li className="flex items-center gap-2 cursor-pointer">
                Instagram <FaInstagram />
              </li>
              <li className="flex items-center gap-2 cursor-pointer">
                Facebook <FaFacebook />
              </li>
              <li className="flex items-center gap-2 cursor-pointer">
                Twitter <FaTwitter />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
