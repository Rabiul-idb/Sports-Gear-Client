import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-slate-100">
        <footer class=" text-base-content pb-20 pt-20 mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto ">
          <div>
            <h6 class="text-lg md:text-xl lg:text-2xl font-bold text-black">
              SportsGear
            </h6>
            <p className="text-base font-medium mt-3">
              SportsGear is a sports equipment company that specializes in
              creating high-quality, innovative products for athletes of all
              levels.
            </p>
          </div>
          <div className=" ">
            <h6 class=" mb-3 text-base md:text-lg lg:text-xl font-semibold text-black">
              Contact
            </h6>
            <p className="font-medium text-base text-gray-700">
              Office: Sarishabari, jamalpur <br></br>
              Phone: 0171-123456 <br></br>
              Email: info@sportsgear.com
            </p>
            <p className="text-lg font-semibold mt-3">Follow Us:</p>
            <div className="flex gap-3 mt-1">
              <Link className="border inline-flex justify-center items-center h-11 w-11 text-xl bg-blue-400 hover:text-white rounded-full">
                <FaFacebookF className="" />
              </Link>
              <Link className="border inline-flex justify-center items-center h-11 w-11 text-xl bg-blue-400 hover:text-white rounded-full">
                <FaTwitter className="" />
              </Link>
              <Link className="border inline-flex justify-center items-center h-11 w-11 text-xl bg-blue-400 hover:text-white rounded-full">
                <FaLinkedinIn className="" />
              </Link>
            </div>
          </div>
          <div className=" ">
            <h6 class="mb-3 text-base md:text-lg lg:text-xl font-semibold text-black">
              Legal
            </h6>
            <a class="link link-hover text-base font-semibold block text-gray-700">
              Terms of use
            </a>
            <a class="link link-hover text-base font-semibold block text-gray-700">
              Privacy policy
            </a>
            <a class="link link-hover text-base font-semibold block text-gray-700">
              Cookie policy
            </a>
          </div>
          <form>
            <h6 class=" text-base md:text-lg lg:text-xl font-semibold text-black">
              Newsletter
            </h6>
            <fieldset class="form-control ">
              <label class="label">
                <span class="label-text text-base font-semibold">
                  Enter your email address
                </span>
              </label>
              <div class="">
                <input
                  type="text"
                  placeholder="username@site.com"
                  class="input input-bordered join-item lg:w-full"
                />
                <button class="btn btn-info lg:w-full lg:mt-2">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
        <div className="border-t bg-slate-200 shadow">
          <p className="font-semibold text-gray-500 text-center py-7">
            &copy; 2024 Career Compass. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
