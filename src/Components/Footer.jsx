

const Footer = () => {
    return (
        <div>
            <div>
      <footer class=" text-base-content pb-12 pt-72 -mt-48 grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto ">
        <div>
          <h6 class="text-lg md:text-xl lg:text-2xl font-bold text-black">
            Career Compass
          </h6>
          <p className="text-base font-semibold">
            Career Compass is a career development platform that helps
            individuals discover their strengths, interests, and values to find
            the right career path.
          </p>
        </div>
        <div className="grid ">
          <h6 class="footer-title text-base md:text-lg lg:text-xl font-semibold text-black">
            Company
          </h6>
          <a class="link link-hover text-base font-semibold">About us</a>
          <a class="link link-hover text-base font-semibold">Contact</a>
          <a class="link link-hover text-base font-semibold">Jobs</a>
          <a class="link link-hover text-base font-semibold">Press kit</a>
        </div>
        <div className="grid ">
          <h6 class="footer-title text-base md:text-lg lg:text-xl font-semibold text-black">
            Legal
          </h6>
          <a class="link link-hover text-base font-semibold">Terms of use</a>
          <a class="link link-hover text-base font-semibold">Privacy policy</a>
          <a class="link link-hover text-base font-semibold">Cookie policy</a>
        </div>
        <form>
          <h6 class="footer-title text-base md:text-lg lg:text-xl font-semibold text-black">
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
              <button class="btn btn-info lg:w-full lg:mt-2">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="border-t">
          <p className="font-semibold text-gray-500 text-center py-7">
            &copy; 2024 Career Compass. All rights reserved.
          </p>
      </div>
    </div>
        </div>
    );
};

export default Footer;